import { createReducer, on } from '@ngrx/store';
import { JOKER_WINS } from '../../config-game';
import { Game, IGame } from '../../models/game';
import { User } from '../../models/user';
import {
    attemptCharacter, changeWord, changeWordWithJoker,
    createUser, giveCharacter, giveClue, logoutUser, wordsLoaded
} from '../actions/game.action';

export const initialState: { game: IGame } = { game: new Game(new User('')) };

const lGameReducer = createReducer(initialState,
    on(createUser, (state, { name }) => {
        const game = state.game.copy();

        game.user.name = name;

        return { ...state, game };
    }),
    on(logoutUser, state => {
        const game = state.game.copy();

        game.user = new User('');

        return { ...state, game };
    }),
    on(wordsLoaded, (state, { words }) => {
        const game = state.game.copy();

        game.words = words;
        game.selectRandomWord();
        game.ready = true;

        return { ...state, game };
    }),
    on(attemptCharacter, (state, { character }) => {
        const game = state.game.copy();

        game.currentWord.attemptCharacter(character);

        if (game.currentWord.isWin) {
            game.user.wordsFound.push(game.currentWord);
            game.user.jokers += JOKER_WINS;
        }

        return { ...state, game };
    }),
    on(changeWord, state => {
        const game = state.game.copy();

        game.selectRandomWord();

        return { ...state, game };
    }),
    on(changeWordWithJoker, state => {
        const game = state.game.copy();

        if (game.user.jokers > 0) {
            game.selectRandomWord();
            game.user.jokers--;
        }

        return { ...state, game };
    }),
    on(giveClue, state => {
        const game = state.game.copy();

        if (game.user.jokers > 0) {
            game.giveClue();
            game.user.jokers--;
        }

        return { ...state, game };
    }),
    on(giveCharacter, state => {
        const game = state.game.copy();

        if (game.user.jokers > 0) {
            game.giveCharacter();
            game.user.jokers--;
        }

        return { ...state, game };
    }),
);



export function gameReducer(state, action) {
    return lGameReducer(state, action);
}
