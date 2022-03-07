import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    component: HomeComponent 
  },
  { path: 'home',
    loadChildren:  () => import('./pages/pages.module').then(m => m.PagesModule) 
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
