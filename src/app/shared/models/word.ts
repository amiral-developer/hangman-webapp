export interface IWord {
    text?: string;
    characters?: string[];
    clue?: string;
    displayClue?: boolean;
    charactersAttempted?: string[];
    charactersFound?: string[];
    lifesRemaining?: number;
    isLose?: boolean;
    isWin?: boolean;

    fillWord: () => string[];
    attemptCharacter: (character: string) => boolean;
    reset: () => void;
    copy: () => IWord;
}

export class Word implements IWord {
    public characters: string[];
    public charactersAttempted: string[];
    public charactersFound: string[];
    public displayClue: boolean;
    public lifesRemaining: number;
    public isLose: boolean;
    public isWin: boolean;

    constructor(public text: string, public clue?: string) {
        this.text = this.text.toUpperCase();
        this.characters = this.text.split('');
        this.reset();
    }

    public reset() {
        this.charactersAttempted = [];
        this.charactersFound = [];
        this.displayClue = false;
        this.lifesRemaining = 6;
        this.isLose = false;
        this.isWin = false;
    }

    public fillWord(): string[] {
        return this.characters.map(character => {
            if (this.charactersFound.includes(character)
                || character === ' ' || character === '-') {
                return character;
            }

            return '';
        })
    }

    public attemptCharacter(character: string): boolean {
        const characterInWord = this.characters.includes(character);

        this.charactersAttempted.push(character);

        if (characterInWord) {
            this.charactersFound.push(character);

            const wordFilled = this.fillWord();
            if (wordFilled.filter(lCharacter => lCharacter !== '').length
                === wordFilled.length) {
                this.isWin = true;
            }

            return true;
        }

        this.lifesRemaining--;

        if (this.lifesRemaining === 0) {
            this.isLose = true;
        }

        return false;
    }

    public copy(): IWord {
        const copy = new Word(this.text, this.clue);

        copy.charactersAttempted = this.charactersAttempted;
        copy.charactersFound = this.charactersFound;

        return copy;
    }
}
