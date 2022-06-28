import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniEarphoneComponent } from './mini-earphone.component';

describe('MiniEarphoneComponent', () => {
  let component: MiniEarphoneComponent;
  let fixture: ComponentFixture<MiniEarphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniEarphoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniEarphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
