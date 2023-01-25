import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage  {
  private content: any;
  isSubmited : boolean =true
  submeitMessage: string =''
  errorMessage : any;
  error : boolean = false
contact ={
  name: '',
  email:'',
  subject:'',
  message:'',
}
  constructor(private http: HttpClient,private toastController: ToastController,private alertController: AlertController,private formBuilder:FormBuilder) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Please Fill all the field',
      duration: 1500,
      color:'danger',
      position:'middle',
    });

    await toast.present();
  }  

  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Alert',
  //     subHeader: 'Important message',
  //     message: 'This is an alert!',
  //     buttons: ['OK'],
  
  //   });

  //   await alert.present();
  // }

  onInit(){
    this.content = this.formBuilder.group({
     
    })
  }

  async submitForm() {
    if(this.contact.name == '' || this.contact.name == null){
     this.errorMessage = "Please Enter Name";
     this.error = true
      return;
    };
    if(this.contact.email == '' || this.contact.email == null){
      this.errorMessage = "Please Enter Email";
      this.error = true
       return;
     }
    console.log(this.contact)
    this.submeitMessage ="Message sent SuccessFully"
    this.isSubmited = true
    setTimeout(()=>{
      this.isSubmited = false
    },5000)
    if(this.contact)
      this.http.post("http://localhost/CorePhpApi/Api/contactModel.php", this.contact).subscribe((response) => {
      console.log(response)
    });
  }

}
