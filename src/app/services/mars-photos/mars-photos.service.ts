import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarsPhotosDTO } from 'src/app/models/mars-phothos-dto';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MarsPhotosService {

  readonly API_KEY = 'tKORvAXU6JValFme9VKtXk1VQaUOSVpLkZjrWf0M';

  readonly BASE_PATH = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';

  constructor(private http: HttpClient) { }

  getMarsPhotosWithFilter(name: string){
    const url = `${this.BASE_PATH}/${name}/photos?sol=1000&api_key=${this.API_KEY}`;

    return this.http.get<MarsPhotosDTO[]>(url).pipe( 
      map( marsPhotosService => {
        return marsPhotosService['photos'];
      })
    );
  }

}
