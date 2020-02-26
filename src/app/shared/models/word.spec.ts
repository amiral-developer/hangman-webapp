import { IWord, Word } from './word';

describe('Word', () => {
  let word: IWord;

  beforeEach(() => {
    word = new Word('test');
  });

  it('should create an instance', () => {
    expect(word).toBeTruthy();
  });

  it('should return blank array', () => {
    expect(word.fillWord()).toEqual(['', '', '', '']);
    expect(word.charactersAttempted.length).toEqual(0);
    expect(word.charactersFound.length).toEqual(0);
  });

  it('should accept character attempted', () => {
    expect(word.attemptCharacter('E')).toBeTrue();
    expect(word.fillWord()).toEqual(['', 'E', '', '']);
    expect(word.charactersAttempted.includes('E')).toBeTrue();
    expect(word.charactersFound.includes('E')).toBeTrue();
  });

  it('should refuse character attempted', () => {
    expect(word.attemptCharacter('Z')).toBeFalse();
    expect(word.fillWord()).toEqual(['', '', '', '']);
    expect(word.charactersAttempted.includes('Z')).toBeTrue();
    expect(word.charactersFound.includes('Z')).toBeFalse();
  });

  it('should accept character attempted and fill correctly', () => {
    expect(word.attemptCharacter('T')).toBeTrue();
    expect(word.fillWord()).toEqual(['T', '', '', 'T']);
    expect(word.charactersAttempted.includes('T')).toBeTrue();
    expect(word.charactersFound.includes('T')).toBeTrue();
  });
});
