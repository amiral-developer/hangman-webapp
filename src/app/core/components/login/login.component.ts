import { Component, ViewChild, ElementRef } from '@angular/core';
import { IState } from 'src/app/shared/store/state';
import { Store } from '@ngrx/store';
import { createUser } from 'src/app/shared/store/actions/game.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('name') public name: ElementRef<HTMLInputElement>;

  constructor(
    private store: Store<IState>,
    private router: Router) { }

  public startGame() {
    if (this.name.nativeElement.value !== '') {
      this.store.dispatch(createUser({ name: this.name.nativeElement.value }));
      this.router.navigateByUrl('home');
    }
  }

}
