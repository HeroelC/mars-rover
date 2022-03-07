import { Component, Input, OnInit } from '@angular/core';
import { MarsPhotosDTO } from 'src/app/models/mars-phothos-dto';

@Component({
  selector: 'app-card-mars-photo',
  templateUrl: './card-mars-photo.component.html',
  styleUrls: ['./card-mars-photo.component.scss']
})
export class CardMarsPhotoComponent implements OnInit {

  @Input() marsPhotos: MarsPhotosDTO[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
