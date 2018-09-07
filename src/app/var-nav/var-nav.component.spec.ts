/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VarNavComponent } from './var-nav.component';

describe('VarNavComponent', () => {
  let component: VarNavComponent;
  let fixture: ComponentFixture<VarNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
