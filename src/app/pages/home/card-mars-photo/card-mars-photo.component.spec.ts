import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMarsPhotoComponent } from './card-mars-photo.component';

describe('CardMarsPhotoComponent', () => {
  let component: CardMarsPhotoComponent;
  let fixture: ComponentFixture<CardMarsPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMarsPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMarsPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
