import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { ServiceModule } from '../services/service.module';
import { Route, RouterModule } from '@angular/router';
import { CardMarsPhotoComponent } from './home/card-mars-photo/card-mars-photo.component';
import { LoadingComponent } from './home/loading/loading.component';

const homeRoute: Route[] = [
  {
      path     : '',
      component: HomeComponent
  },
];

@NgModule({
  declarations: [ HomeComponent, CardMarsPhotoComponent, LoadingComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute)
  ],
  providers: [
    ServiceModule
  ]
})
export class PagesModule { }
