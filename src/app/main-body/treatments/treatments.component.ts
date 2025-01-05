import { Component } from '@angular/core';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})
export class TreatmentsComponent {

 
  showContent=false;
  selectedId=-1;
  treatments = [
    "Spine & Joint Care",
    "Rheumatological disorders",
    "Diabetes Treatment",
    "Heart care",
    "Kidney care",
    "Migraine / Headache & Vertigo",
    "Neuro-Muscular disorders",
    "Gastrointestinal disorders",
    "GERD (Reflux disease)",
    "Ulcerative colitis",
    "Chron's disease",
    "Piles & Fissures care",
    "Asthma care",
    "Psoriasis treatment",
    "Skin care",
    "Gynecological disorders",
    "PCOD & Thyroid",
    "Infertility Treatment",
    "Garbhasanskar",
    "Healthy pregnancy planning",
    "Suvarnaprashan Sanskar",
    "Child Healthcare programmes",
    "Stress management",
    "Sleep disorders",
    "Rasayan (Rejuvenation therapy)",
    "Vajikaran (For Male Infertility)",
    "Panchakarma therapies"
  ];
  
}
