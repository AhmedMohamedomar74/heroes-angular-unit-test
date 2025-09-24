import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesForLab } from './messages.lab';
import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MessageService } from '../../services/message/message.service';

describe('2-message component testing:', () => {
  let fixture: ComponentFixture<MessagesForLab>, component: MessagesForLab;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeAll(() => {
    // make configuration for component
    TestBed.configureTestingModule({
      imports: [MessagesForLab],
      providers: [provideZonelessChangeDetection()],
    });

    // make fixture
    fixture = TestBed.createComponent(MessagesForLab);
    component = fixture.componentInstance;
    messageServiceSpy = jasmine.createSpyObj('messageService', [
      'add',
      'clear',
    ]);
    messageServiceSpy.messages = [];
  });

  it('expect component template to be empty', () => {
    //Note: there is @if"messageService.messages.length" in line 1 in template

    // messageServiceSpy.messages = []
    fixture.detectChanges();
    let divMessages = fixture.debugElement.query(By.css('.msg'));
    expect(divMessages).toBeNull();
  });
  it('then expect div.msg to have the messages after setting it', () => {
    messageServiceSpy.messages.push({ id: 1, message: 'sdafsd' })

    fixture.detectChanges();
    let divMessages = fixture.debugElement.queryAll(By.css('.msg'));
    expect(divMessages.length).toBe(1);
  });
});
