import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlusasListComponent } from './blusas-list.component';

describe('BlusasListComponent', () => {
  let component: BlusasListComponent;
  let fixture: ComponentFixture<BlusasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlusasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlusasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
