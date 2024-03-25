import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedrComponent } from './seedr.component';

describe('SeedrComponent', () => {
  let component: SeedrComponent;
  let fixture: ComponentFixture<SeedrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
