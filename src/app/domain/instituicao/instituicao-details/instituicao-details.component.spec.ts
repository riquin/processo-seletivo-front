import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaoDetailsComponent } from './instituicao-details.component';

describe('InstituicaoDetailsComponent', () => {
  let component: InstituicaoDetailsComponent;
  let fixture: ComponentFixture<InstituicaoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituicaoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicaoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
