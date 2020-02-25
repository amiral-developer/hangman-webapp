import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IWord } from '../models/word';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  public loadWords(): Observable<IWord[]> {
    return of([]);
  }
}
