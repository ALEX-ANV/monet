import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmsPage } from './films.page';
import {ExploreContainerComponentModule} from '../../explore-container/explore-container.module';

describe('Tab1Page', () => {
  let component: FilmsPage;
  let fixture: ComponentFixture<FilmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
