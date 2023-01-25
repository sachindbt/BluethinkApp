import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  ret: any;
  user: any;
  showdata: any;
  constructor() { }

  ngOnInit() {
    this.showdata = false;
  }
// JSON "get" example
async getObject() {
  this.ret = await Preferences.get({ key: 'user' });
  this.user = JSON.parse(this.ret.value);
  console.log(this.user);

  this.showdata = true;
}
async setObject() {
  await Preferences.set({
    key: 'user',
    value: JSON.stringify({
      id: 1,
      name: 'Max pk'
    })
  });
}

}
