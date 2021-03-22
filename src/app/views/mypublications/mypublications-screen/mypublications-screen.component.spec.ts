import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypublicationsScreenComponent } from './mypublications-screen.component';

describe('MypublicationsScreenComponent', () => {
  let component: MypublicationsScreenComponent;
  let fixture: ComponentFixture<MypublicationsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypublicationsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypublicationsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
