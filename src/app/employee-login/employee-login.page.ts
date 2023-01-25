import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';
import {Router} from '@angular/router';
import { Preferences } from '@capacitor/preferences';
@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.page.html',
  styleUrls: ['./employee-login.page.scss'],
})
export class EmployeeLoginPage implements OnInit {
  photo : any;
  ret: any;
  user: any;
  showdata: any;
  errorLogin : any;
  error :boolean =false
  constructor(private router:Router) { }
  login ={
    usename: '',
    password:'',
  }
checkPlateformForWeb(){
  if (Capacitor.getPlatform() == 'web') return true;
  return false;
}
  ngOnInit() {
    this.showdata = false;
  }
  goDashboard(){ 
    if(this.login.usename == ''){
     this.errorLogin = "Please Enter User Name";
     this.error = true
      return;
    };
    if(this.login.password == ''){
      this.errorLogin = "Please Enter Password";
      this.error = true
       return;
     };
    this.router.navigate(['dashboard'])
  };
  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
  
    // Here you get the image as result.
    const theActualPicture = image.dataUrl;

    this.photo = theActualPicture;
  }
  // async setObject() {
  //   await Preferences.set({
  //     key: 'user',
  //     value: JSON.stringify({
  //       id: 1,
  //       name: 'Max pk'
  //     })
  //   });
  // }
  
  // async sharePhoto(){
  //   await Share.share({
  //     title: 'Share Via Whatsaap',
  //     text: 'I am Sharing Image',
  //     url:this.photo.path,
  //     dialogTitle: 'Shre your real time image',
  //   });
  // } 
}
