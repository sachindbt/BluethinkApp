import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.page.html',
  styleUrls: ['./list-detail.page.scss'],
})
export class ListDetailPage implements OnInit {
passeddata:any;
  constructor(

    private route: ActivatedRoute,
    private navCtr: NavController
  ) {

this.passeddata = JSON.parse(this.route.snapshot.params['data']);


   }

  ngOnInit() {
  }

  gotodetail(){
    this.navCtr.navigateForward(['list']);
  }

}
