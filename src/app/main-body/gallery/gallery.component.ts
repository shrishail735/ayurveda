// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: string[] = [];

  diseases =['pimples','piles','swellen','hairfall']
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(disease:any = 'image'): void {
    this.http.get('/assets/images/'+disease+'.json').subscribe((data: any) => {
      // Assuming data is an array of image URLs
   this.images=data;
  });
}
}
