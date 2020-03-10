import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNewGroupComponent } from './message-new-group.component';

describe('MessageNewGroupComponent', () => {
  let component: MessageNewGroupComponent;
  let fixture: ComponentFixture<MessageNewGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageNewGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageNewGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
