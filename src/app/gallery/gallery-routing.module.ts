import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryPage } from './gallery.page';

const routes: Routes = [
  {
    path: '',
    component: GalleryPage,
    children: [
      {
        path: 'birthday',
        loadChildren: () => import('../birthday/birthday.module').then( m => m.BirthdayPageModule)
      },
      {
        path: '',
        redirectTo: 'birthday',
        pathMatch: 'full'
      },
      {
        path: 'festival',
        loadChildren: () => import('../festival/festival.module').then( m => m.FestivalPageModule)
      },
      {
        path: 'new-year',
        loadChildren: () => import('../new-year/new-year.module').then( m => m.NewYearPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryPageRoutingModule {}
