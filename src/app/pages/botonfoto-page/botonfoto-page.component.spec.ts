import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonfotoPageComponent } from './botonfoto-page.component';

describe('BotonfotoPageComponent', () => {
  let component: BotonfotoPageComponent;
  let fixture: ComponentFixture<BotonfotoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonfotoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonfotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
