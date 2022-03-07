import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarsPhotosService } from './mars-photos/mars-photos.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    MarsPhotosService,
  ],
  exports: [
  ]
})
export class ServiceModule { }
