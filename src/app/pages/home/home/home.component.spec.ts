import {
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  of
} from 'rxjs';
import {
  MarsPhotosDTO
} from 'src/app/models/mars-phothos-dto';
import {
  MarsPhotosService
} from 'src/app/services/mars-photos/mars-photos.service';

import {
  HomeComponent
} from './home.component';

const MOCK_MARS_PHOTO: MarsPhotosDTO[] = [{
    "id": 301536,
    "sol": 1000,
    "camera": {
      "id": 29,
      "name": "NAVCAM",
      "rover_id": 7,
      "full_name": "Navigation Camera"
    },
    "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215136972EDNAS00P1585L0M1-BR.JPG",
    "earth_date": "2006-10-27",
    "rover": {
      "id": 7,
      "name": "Spirit",
      "landing_date": "2004-01-04",
      "launch_date": "2003-06-10",
      "status": "complete"
    }
  },
  {
    "id": 301537,
    "sol": 1000,
    "camera": {
      "id": 29,
      "name": "NAVCAM",
      "rover_id": 7,
      "full_name": "Navigation Camera"
    },
    "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215137010EDNAS00P1585L0M1-BR.JPG",
    "earth_date": "2006-10-27",
    "rover": {
      "id": 7,
      "name": "Spirit",
      "landing_date": "2004-01-04",
      "launch_date": "2003-06-10",
      "status": "complete"
    }
  },
  {
    "id": 301538,
    "sol": 1000,
    "camera": {
      "id": 29,
      "name": "NAVCAM",
      "rover_id": 7,
      "full_name": "Navigation Camera"
    },
    "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215137048EDNAS00P1585L0M1-BR.JPG",
    "earth_date": "2006-10-27",
    "rover": {
      "id": 7,
      "name": "Spirit",
      "landing_date": "2004-01-04",
      "launch_date": "2003-06-10",
      "status": "complete"
    }
  },
  {
    "id": 301539,
    "sol": 1000,
    "camera": {
      "id": 29,
      "name": "NAVCAM",
      "rover_id": 7,
      "full_name": "Navigation Camera"
    },
    "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215137086EDNAS00P1585L0M1-BR.JPG",
    "earth_date": "2006-10-27",
    "rover": {
      "id": 7,
      "name": "Spirit",
      "landing_date": "2004-01-04",
      "launch_date": "2003-06-10",
      "status": "complete"
    }
  },
  {
    "id": 341822,
    "sol": 1000,
    "camera": {
      "id": 30,
      "name": "PANCAM",
      "rover_id": 7,
      "full_name": "Panoramic Camera"
    },
    "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/1000/2P215138639ESFAS00P2600L8M1-BR.JPG",
    "earth_date": "2006-10-27",
    "rover": {
      "id": 7,
      "name": "Spirit",
      "landing_date": "2004-01-04",
      "launch_date": "2003-06-10",
      "status": "complete"
    }
  },
  {
    "id": 341823,
    "sol": 1000,
    "camera": {
      "id": 30,
      "name": "PANCAM",
      "rover_id": 7,
      "full_name": "Panoramic Camera"
    },
    "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/1000/2P215138639ESFAS00P2600R8M1-BR.JPG",
    "earth_date": "2006-10-27",
    "rover": {
      "id": 7,
      "name": "Spirit",
      "landing_date": "2004-01-04",
      "launch_date": "2003-06-10",
      "status": "complete"
    }
  }
]

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture < HomeComponent > ;
  let marsPhotosService: jasmine.SpyObj < MarsPhotosService > ;

  beforeEach(async () => {
    marsPhotosService = jasmine.createSpyObj('MarsPhotosService', ['getMarsPhotosWithFilter']);
    await TestBed.configureTestingModule({
        declarations: [HomeComponent],
        imports: [HttpClientModule],
        providers: [
          HttpClient,
          {
            provide: MarsPhotosService,
            useValue: marsPhotosService
          }
        ]
      })
      .compileComponents();
  });

  beforeEach(async () => {
    marsPhotosService.getMarsPhotosWithFilter.and.returnValue(of(MOCK_MARS_PHOTO));
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
