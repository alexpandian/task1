import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectRenderComponent } from './object-render.component';

describe('ObjectRenderComponent', () => {
  let component: ObjectRenderComponent;
  let fixture: ComponentFixture<ObjectRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
