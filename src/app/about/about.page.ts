import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Hellow Bluethink',
      subHeader: 'You Are At Bluethink About Page',
      message: 'Thankyou for visiting Bluethink!!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
