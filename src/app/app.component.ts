import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router:Router) {}
  goHome(){
    this.router.navigate(['home'])
}
goContact(){
  this.router.navigate(['contacts'])
}
goAbout(){
  this.router.navigate(['about'])
}
goTechnology(){
  this.router.navigate(['technology'])
}
goOurTeam(){
  this.router.navigate(['our-team'])
};
goClient(){
  this.router.navigate(['client-login'])
};
goEmployee(){
  this.router.navigate(['employee-login'])
};
goList(){
  this.router.navigate(['list'])
}
goListDetail(){
  this.router.navigate(['list-detail'])
}
goClientPage(){
  this.router.navigate(['client-page'])
}
goGallery(){
  this.router.navigate(['gallery'])
};
goClients(){
  this.router.navigate(['clients'])
};
goServices(){
  this.router.navigate(['services'])
};
goPortfolio(){
  this.router.navigate(['portfolio'])
};

}
