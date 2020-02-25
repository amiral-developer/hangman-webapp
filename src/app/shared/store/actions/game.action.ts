import { createAction, props } from '@ngrx/store';
import { IWord } from '../../models/word';

export const createUser = createAction('Create User', props<{ name: string }>());
export const wordsLoaded = createAction('Words Loaded', props<{ words: IWord[] }>());
export const loadGame = createAction('Create Game');
export const attemptCharacter =
    createAction('Attempt Character', props<{ character: string }>());
export const changeWord = createAction('Change Word');
export const giveClue = createAction('Give Clue');
export const giveCharacter = createAction('Give Character');
