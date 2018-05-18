import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaoFormComponent } from './instituicao-form.component';

describe('InstituicaoFormComponent', () => {
  let component: InstituicaoFormComponent;
  let fixture: ComponentFixture<InstituicaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituicaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
