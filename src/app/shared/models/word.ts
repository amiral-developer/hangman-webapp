export interface IWord {
    text?: string;
    characters?: string[];
    clue?: string;
    charactersAttempted?: string[];
    charactersFound?: string[];

    fillWord: () => string[];
    attemptCharacter: (character: string) => boolean;
    copy: () => IWord;
}

export class Word implements IWord {
    public characters: string[];
    public charactersAttempted: string[];
    public charactersFound: string[];

    constructor(public text: string, public clue?: string) {
        this.text = this.text.toUpperCase();
        this.characters = this.text.split('');
        this.charactersAttempted = [];
        this.charactersFound = [];
    }

    public fillWord(): string[] {
        return this.characters.map(character => {
            if (this.charactersFound.includes(character)) {
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
            return true;
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
