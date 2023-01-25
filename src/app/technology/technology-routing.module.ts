import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologyPage } from './technology.page';

const routes: Routes = [
  {
    path: '',
    component: TechnologyPage,
    children: [
      {
        path: 'java',
        loadChildren: () => import('.././java/java.module').then( m => m.JavaPageModule)
      },
      {
        path: '',
        redirectTo: 'java',
        pathMatch: 'full'
      },
      {
        path: 'python',
        loadChildren: () => import('.././python/python.module').then( m => m.PythonPageModule)
      },
      {
        path: 'react',
        loadChildren: () => import('.././react/react.module').then( m => m.ReactPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologyPageRoutingModule {}
