import { createReducer, on } from '@ngrx/store';
import { Game, IGame } from '../../models/game';
import { User } from '../../models/user';
import { attemptCharacter, createUser, wordsLoaded } from '../actions/game.action';

export const initialState: IGame = new Game(new User(''));

const lGameReducer = createReducer(initialState,
    on(createUser, (game, { name }) => {
        game.user.name = name;
        return game;
    }),
    on(wordsLoaded, (game, { words }) => {
        game.words = words;
        game.selectRandomWord();
        return game;
    }),
    on(attemptCharacter, (game, { character }) => {
        game.currentWord.attemptCharacter(character);
        return game;
    }),
);



export function gameReducer(state, action) {
    return lGameReducer(state, action);
}
