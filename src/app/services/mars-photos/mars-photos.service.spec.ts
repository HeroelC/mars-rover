import {
  HttpClient
} from '@angular/common/http';
import {
  of
} from 'rxjs';
import {
  MarsPhotosDTO
} from 'src/app/models/mars-phothos-dto';

import {
  MarsPhotosService
} from './mars-photos.service';

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

const MOCK_MARS_PHOTO_SERVICE = {
  "photos": [{
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
}

describe('MarsPhotosService', () => {
  let service: MarsPhotosService;
  let httpClientSpy: jasmine.SpyObj < HttpClient > ;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MarsPhotosService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Service return data with sucess', () => {

    httpClientSpy.get.and.returnValue(of(MOCK_MARS_PHOTO_SERVICE));

    service.getMarsPhotosWithFilter('spirit').subscribe((resultService: MarsPhotosDTO[]) => {
      expect(resultService).toEqual(MOCK_MARS_PHOTO);
    });
  })
});
