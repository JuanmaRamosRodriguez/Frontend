import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonfotoComponent } from './botonfoto.component';

describe('BotonfotoComponent', () => {
  let component: BotonfotoComponent;
  let fixture: ComponentFixture<BotonfotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonfotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonfotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
