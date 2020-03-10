import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChatFormComponent } from './input-chat-form.component';

describe('InputChatFormComponent', () => {
  let component: InputChatFormComponent;
  let fixture: ComponentFixture<InputChatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputChatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputChatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
