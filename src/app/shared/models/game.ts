import { IUser } from './user';
import { IWord } from './word';

export interface IGame {
    user?: IUser;
    words?: IWord[];
    currentWord?: IWord;

    selectRandomWord: () => boolean;
    giveClue: () => void;
    copy: () => IGame;
}

export class Game implements IGame {
    public words: IWord[];
    public currentWord: IWord;

    constructor(public user: IUser) {
        this.words = [];
    }

    public selectRandomWord(): boolean {
        if (this.words.length === 0) {
            return false;
        }

        if (this.currentWord) {
            this.currentWord.displayClue = false;
        }

        const random = Math.floor(Math.random() * this.words.length);
        this.currentWord = this.words[random];

        return true;
    }

    public giveClue() {
        this.currentWord.displayClue = true;
    }

    public copy(): IGame {
        const copy = new Game(this.user);

        copy.words = this.words;
        copy.currentWord = this.currentWord;

        return copy;
    }
}
