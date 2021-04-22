import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectorContainerComponent } from './prospector-container.component';

describe('ProspectorContainerComponent', () => {
  let component: ProspectorContainerComponent;
  let fixture: ComponentFixture<ProspectorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
