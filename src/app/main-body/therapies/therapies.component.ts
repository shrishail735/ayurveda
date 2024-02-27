import { Component } from '@angular/core';

@Component({
  selector: 'app-therapies',
  templateUrl: './therapies.component.html',
  styleUrls: ['./therapies.component.scss'],
})
export class TherapiesComponent {
  therapies = [
    {
      id:0,
      name: 'Leech Therapy',
      url:"https://lh3.googleusercontent.com/p/AF1QipO5tigSbb9tDfA2_hmXuSeOjdR3Lise0E-s65SH=w960-h960-n-o-v1",
      information:
        'Since the time of ancient Egypt, leeches have been used in medicine to treat nervous system abnormalities, dental problems, skin diseases, and infections Today, they are mostly used in plastic surgery and other microsurgery. This is because leeches secrete peptides and proteins that work to prevent blood clots. These secretions are also known as anticoagulants. This keeps blood flowing to wounds to help them heal. Currently, leech therapy is seeing a revival due to its simple and inexpensive means of preventing complications. ',

      benefits:"",
      
    },
    {
      id:1,
      name: 'Cupping therapy',
      url:"https://lh3.googleusercontent.com/p/AF1QipOKkOQgYGNHKjewiAbq9kplBjPGPeJd3mEQDcqH=w960-h960-n-o-v1",
      information:
        'Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin for a few minutes to create suction. People get it for many purposes, including to help with pain, inflammation, blood flow, relaxation and well-being, and as a type of deep-tissue massage.',

      benefits:"",
      
    },
    {
      id:2,
      name: 'Panchakarma Therapy',
      url:"https://lh3.googleusercontent.com/p/AF1QipOwlbyrxUVoi1kPwwr1p1zEZU4TLFL7xN6RAArK=w960-h960-n-o-v1",
      information:
        'Panchakarma is a treatment program for the body, mind, and consciousness that cleanses and rejuvenates. It is based on Ayurvedic principles, every human is a unique phenomenon manifested through the five basic elements of Ether, Air, Fire, Water, and Earth.',

      benefits:"",
      
    },
    {
      id:3,
      name: 'Electroacupuncture Therapy',
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiyTdgFIN4jPJg19fC2VsDlmhGW0c3RtzKxA&usqp=CAU",
      information:
        'Electroacupuncture is similar to acupuncture, a widely practiced form of traditional Chinese medicine (TCM). Acupuncture involves the use of thin needles to stimulate specific pressure points linked to unwanted symptoms.',

      benefits:"",
      
    },
  ];

  index=0;
  showDialog:boolean=false;
  openDialog(id:any)
  {
    this.showDialog = !this.showDialog;
    this.index=id;
  }
  closeDialog()
  {
    this.showDialog = !this.showDialog;
  }
}
