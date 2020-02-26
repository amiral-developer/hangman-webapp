import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IState } from 'src/app/shared/store/state';
import { TouchComponent } from './touch.component';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

describe('TouchComponent', () => {
  let component: TouchComponent;
  let fixture: ComponentFixture<TouchComponent>;
  let store: MockStore<IState>;
  const initialState: IState = {
    gameState: {
      game: {}
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TouchComponent],
      providers: [provideMockStore({ initialState }), Router],
    })
      .compileComponents();

    store = TestBed.get<Store<IState>>(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
