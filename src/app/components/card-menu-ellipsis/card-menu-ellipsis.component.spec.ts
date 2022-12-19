import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardMenuEllipsisComponent } from './card-menu-ellipsis.component';

describe('CardMenuEllipsisComponent', () => {
  let component: CardMenuEllipsisComponent;
  let fixture: ComponentFixture<CardMenuEllipsisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMenuEllipsisComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardMenuEllipsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
