import { Component, OnInit } from '@angular/core';
import { FilterMarsPhotosEnum } from 'src/app/models/filter-mars-photos-enum';
import { MarsPhotosDTO } from 'src/app/models/mars-phothos-dto';
import { MarsPhotosService } from 'src/app/services/mars-photos/mars-photos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  marsPhotos: MarsPhotosDTO[] = [];
  loading: boolean = false;

  constructor(private __marsPhotosService: MarsPhotosService) { }

  ngOnInit(): void {

    this.getMarsPhotosWithFilter(FilterMarsPhotosEnum.SPIRIT);
  }

  getMarsPhotosWithFilter(name: string){
    this.loading = true;
    this.__marsPhotosService.getMarsPhotosWithFilter(name).subscribe( ( data: MarsPhotosDTO[] ) => {
      this.marsPhotos = data;
      console.log( this.marsPhotos )
      this.loading = false;
    })
  }

}
