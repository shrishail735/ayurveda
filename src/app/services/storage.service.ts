import { Injectable } from '@angular/core';
import {Storage, ref, listAll, getDownloadURL, uploadBytes } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage:Storage) { }
  
  async uploadImage(files: FileList): Promise<string[]> {
    const fileArray = Array.from(files);
    const downloadURLs: Promise<string>[] = [];
  
    fileArray.forEach(async(file) => {
      const storageRef = ref(this.storage, `uploads/${file.name}`);
      const uploadTask = await uploadBytes(storageRef, file);
      const downloadURL = getDownloadURL(storageRef);
  
      downloadURLs.push(downloadURL);
    });
  
    // Await all downloadURLs promises and return them
    return Promise.all(downloadURLs);
  }
  
  async getImages() {
    const storageRef = ref(this.storage, 'uploads/');
    const result = await listAll(storageRef);
    const urlPromises = result.items.map(itemRef => getDownloadURL(itemRef));
    return Promise.all(urlPromises);
  }
}
