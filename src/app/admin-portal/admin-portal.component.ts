import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
// import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
// import { Auth } from '@angular/fire/auth';
// import { signInAnonymously } from 'firebase/auth';
@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.scss']
})
export class AdminPortalComponent {
  selectedFile:File|null=null
  imageUploaded:string=''
  constructor(private storage: StorageService ){}

 async uploadFile()
  {
    if(this.selectedFile)
    {
      this.imageUploaded='Uploading.....'
      const downloadURL = await this.storage.uploadImage(this.selectedFile);
      if(downloadURL)
      {
        this.imageUploaded="Image uploaded successfully!"
      }
      this.selectedFile=null;
    }
  }
  selectFile(event: any) {
     this.selectedFile = event.target.files[0];
     this.imageUploaded='';
    // const storageRef = ref(this.storage, `uploads/${file.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, file);

    // uploadTask.on('state_changed', 
    //   (snapshot) => {
    //     // Observe state change events such as progress, pause, and resume
    //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log('Upload is ' + progress + '% done');
    //   }, 
    //   (error) => {
    //     // Handle unsuccessful uploads
    //     console.error(error);
    //   }, 
    //   () => {
    //     // Handle successful uploads on complete
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       console.log('File available at', downloadURL);
    //     });
    //   }
    // );
  }
}
