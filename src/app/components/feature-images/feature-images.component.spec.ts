import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureImagesComponent } from './feature-images.component';

describe('FeatureImagesComponent', () => {
  let component: FeatureImagesComponent;
  let fixture: ComponentFixture<FeatureImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
