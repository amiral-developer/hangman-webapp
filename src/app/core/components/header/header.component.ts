import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGame } from 'src/app/shared/models/game';
import { IState } from 'src/app/shared/store/state';
import { logoutUser } from 'src/app/shared/store/actions/game.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public game$: Observable<IGame>;

  constructor(
    private store: Store<IState>,
    private router: Router) {
    this.game$ = this.store.select(state => state.gameState.game);
  }

  public logout() {
    this.store.dispatch(logoutUser());
    this.router.navigateByUrl('login');
  }

}
