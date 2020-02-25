import { createReducer, on } from '@ngrx/store';
import { Game, IGame } from '../../models/game';
import { User } from '../../models/user';
import { attemptCharacter, createUser, wordsLoaded } from '../actions/game.action';

export const initialState: { game: IGame } = { game: new Game(new User('')) };

const lGameReducer = createReducer(initialState,
    on(createUser, (state, { name }) => {
        const game = state.game.copy();

        game.user.name = name;

        return { ...state, game };
    }),
    on(wordsLoaded, (state, { words }) => {
        const game = state.game.copy();

        game.words = words;
        game.selectRandomWord();

        return { ...state, game };
    }),
    on(attemptCharacter, (state, { character }) => {
        const game = state.game.copy();

        game.currentWord.attemptCharacter(character);

        return { ...state, game };
    }),
);



export function gameReducer(state, action) {
    return lGameReducer(state, action);
}
