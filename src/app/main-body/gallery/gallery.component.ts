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
  constructor(private http: HttpClient, private sanitizer: DomSanitizer,private storage:StorageService) { }


  ngOnInit(): void {
    this.loadImages();
  }

  async loadImages() {

   this.images= await this.storage.getImages();
}
}
