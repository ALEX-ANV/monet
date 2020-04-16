import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {ExploreContainerComponentModule} from '../../explore-container/explore-container.module';
import {SerialsPage} from './serials.page';

describe('Tab2Page', () => {
  let component: SerialsPage;
  let fixture: ComponentFixture<SerialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SerialsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SerialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
