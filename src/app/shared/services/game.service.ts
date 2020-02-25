import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IWord, Word } from '../models/word';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  public loadWords(): Observable<IWord[]> {
    return this.http.get<IWord[]>('assets/data/words.json')
      .pipe(
        map(words => words
          .map(word => new Word(word.text, word.clue))
          // avoid to manage long words :)
          .filter(word => word.text.length < 10)
          .filter(word => word.text.includes('-'))
        )
      );
  }
}
