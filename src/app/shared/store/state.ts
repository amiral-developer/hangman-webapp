import { IGame } from '../models/game';

export interface IState {
    gameState: {
        game: IGame,
    },
}