import { IUser } from './user';
import { IWord } from './word';

export interface IGame {
    user?: IUser;
    words?: IWord[];
    currentWord?: IWord;
}

export class Game implements IGame {
    public words: IWord[];
    public currentWord: IWord;

    constructor(public user: IUser) {
        this.words = [];
    }
}
