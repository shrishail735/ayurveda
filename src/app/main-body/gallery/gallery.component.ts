// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: string[] = [];
  selectedDisease="pimples";
  diseases =['pimples','piles','swellen','hairfall']
  constructor(private http: HttpClient, private sanitizer: DomSanitizer,private storage:StorageService) { }


  ngOnInit(): void {
    this.loadImages();
  }

  async loadImages() {

  //   this.selectedDisease=disease
  //   this.http.get('/assets/images/'+this.selectedDisease+'.json').subscribe((data: any) => {
  //     // Assuming data is an array of image URLs
  //  this.images=data;
  
  // });
   this.images= await this.storage.getImages();
}
}
