import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaoListComponent } from './instituicao-list.component';

describe('InstituicaoListComponent', () => {
  let component: InstituicaoListComponent;
  let fixture: ComponentFixture<InstituicaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituicaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
