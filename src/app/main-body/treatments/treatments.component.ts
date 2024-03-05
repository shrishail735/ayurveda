import { Component } from '@angular/core';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})
export class TreatmentsComponent {

 
  showContent=false;
  selectedId=-1;
    treatments=[
      {
        id:0,
        name:"Panchkarma",
        effects:"",
        information:"Among all common ayurvedic treatments, most people are aware of Panchkarma. Panch meaning five refers to"
      },
      {
        id:1,
        name:"Vamanan",
        effects:"",
        information:"Vamanan or medically induced vomiting might seem scary at first but has a host of benefits. The focus is to"
      },
      {
        id:2,
        name:"Nasyam",
        effects:"",
        information:"Nasyam refers to the process of administering treatments to the nose. Usually, the treatment is an oil and the"
      },
      {
        id:3,
        name:"Shirodhara",
        effects:"",
        information:"When people look up advertisements for Ayurvedic treatments, most show oil being slowly dripped on the"
      },
      


    ]
    // selectedTreatment=this.treatments[0];
    handleClick(treatment:any) {
      this.showContent=true

      if(this.selectedId==treatment.id)
      this.selectedId=-1;
    else
      this.selectedId=treatment.id
    }
    // disableContent()
    // {
    //   this.showContent=false
    // }
}
