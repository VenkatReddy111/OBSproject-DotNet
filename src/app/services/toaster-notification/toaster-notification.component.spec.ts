import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterNotificationComponent } from './toaster-notification.component';

describe('ToasterNotificationComponent', () => {
  let component: ToasterNotificationComponent;
  let fixture: ComponentFixture<ToasterNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToasterNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
