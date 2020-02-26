import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IState } from 'src/app/shared/store/state';
import { ActionsComponent } from './actions.component';

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;
  let store: MockStore<IState>;

  const initialState: IState = {
    gameState: {
      game: {}
    }
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsComponent],
      providers: [provideMockStore({ initialState })],

    })
      .compileComponents();

    store = TestBed.get<Store<IState>>(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
