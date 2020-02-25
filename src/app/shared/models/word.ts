export interface IWord {
    text: string;
    characters?: string[];
    clue: string;
    charactersAttempted?: string[]
    charactersFound?: string[]
}

export class Word implements IWord {
    public characters: string[];
    public clue: string;
    public charactersAttempted: string[];
    public charactersFound: string[];

    constructor(public text: string) {
        this.characters = text.split('');
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
}
