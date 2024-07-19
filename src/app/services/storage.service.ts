import { Injectable } from '@angular/core';
import {Storage, ref, listAll, getDownloadURL, uploadBytes } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage:Storage) { }
  
  async uploadImage(file: File): Promise<string> {
    const storageRef = ref(this.storage, `uploads/${file.name}`);
    
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  }
  async getImages() {
    const storageRef = ref(this.storage, 'uploads/');
    const result = await listAll(storageRef);
    const urlPromises = result.items.map(itemRef => getDownloadURL(itemRef));
    return Promise.all(urlPromises);
  }
}
