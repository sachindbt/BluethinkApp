import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'technology',
    loadChildren: () => import('./technology/technology.module').then( m => m.TechnologyPageModule)
  },
  {
    path: 'our-team',
    loadChildren: () => import('./our-team/our-team.module').then( m => m.OurTeamPageModule)
  },

  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'list-detail',
    loadChildren: () => import('./list-detail/list-detail.module').then( m => m.ListDetailPageModule)
  },

  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'client-login',
    loadChildren: () => import('./client-login/client-login.module').then( m => m.ClientLoginPageModule)
  },
  {
    path: 'employee-login',
    loadChildren: () => import('./employee-login/employee-login.module').then( m => m.EmployeeLoginPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'birthday',
    loadChildren: () => import('./birthday/birthday.module').then( m => m.BirthdayPageModule)
  },
  {
    path: 'festival',
    loadChildren: () => import('./festival/festival.module').then( m => m.FestivalPageModule)
  },
  {
    path: 'new-year',
    loadChildren: () => import('./new-year/new-year.module').then( m => m.NewYearPageModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then( m => m.PortfolioPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
