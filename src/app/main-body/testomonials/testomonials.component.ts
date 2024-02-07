import { Component } from '@angular/core';

@Component({
  selector: 'app-testomonials',
  templateUrl: './testomonials.component.html',
  styleUrls: ['./testomonials.component.scss'],
})
export class TestomonialsComponent {
  currentIndex:number= 0;
  persons = [
    {
      review:
        'We started treatment for Eczema 2 months ago which is leech and cupping therapy followed by Virechan and found it helpful to improve the condition , treatment is still in progress. Doctor Pritam is very kind and gentle, he gives sufficient time to each patient and we can freely interact with doctor. He himself calls the patient and follow up their condition.Staff members are also cooperative. Thank you Dr. Pritam for providing step by step consultation.',
      name: 'Mahesh G',
    },
    {
      review:
        'I am extremely satisfied with the treatment I received at Doctor clinic. The Doctors expertise and professionalism were evident throughout my visit. The staff was also friendly and efficient. I truly benefited from their services and highly recommend Doctor clinic to anyone in need of medical assistance.',
      name: 'Harshal K',
    },
    {
      review:
        'Best treatment for stress related anxiety, depression disorders. I am suffering from negative thoughts, anxiety attacks from 5 years but after taking treatment from Dr.Pritam in Shree Vishwavijaya Hospital I got much confidence and feeling positive about myself. Thanks to entire team.',
      name: 'Parashuram P',
    },
  ];

  ngOnInit()
  {
     setInterval(()=>{
   
       this.currentIndex=(this.currentIndex+1 )% this.persons.length;
     },5000)
  }
}
