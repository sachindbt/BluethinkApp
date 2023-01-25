import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor( private navCtr: NavController) { }


  gotodetail(pageis:any)
  {

  this.navCtr.navigateForward(['list-detail',{
    data:JSON.stringify(pageis)
  }]);

  }


  ngOnInit() {
  }

}
