import { IWord } from './word';

export interface IUser {
    name: string;
    wordsFound: IWord[];
    jokers: number;
}

export class User implements IUser {
    public wordsFound: IWord[];
    public jokers: number;

    constructor(public name: string) {
        this.wordsFound = [];
        this.jokers = 5;
    }
}
