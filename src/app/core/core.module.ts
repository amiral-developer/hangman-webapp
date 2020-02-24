import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material.module';
import { GameModule } from '../game/game.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    GameModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ]
})
export class CoreModule { }
