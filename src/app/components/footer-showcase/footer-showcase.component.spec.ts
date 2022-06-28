import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterShowcaseComponent } from './footer-showcase.component';

describe('FooterShowcaseComponent', () => {
  let component: FooterShowcaseComponent;
  let fixture: ComponentFixture<FooterShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
