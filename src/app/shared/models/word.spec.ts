import { Word } from './word';
import { equal } from 'assert';

describe('Word', () => {
  let word: Word;

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
    expect(word.attemptCharacter('e')).toBeTrue();
    expect(word.fillWord()).toEqual(['', 'e', '', '']);
    expect(word.charactersAttempted.includes('e')).toBeTrue();
    expect(word.charactersFound.includes('e')).toBeTrue();
  });

  it('should refuse character attempted', () => {
    expect(word.attemptCharacter('z')).toBeFalse();
    expect(word.fillWord()).toEqual(['', '', '', '']);
    expect(word.charactersAttempted.includes('z')).toBeTrue();
    expect(word.charactersFound.includes('z')).toBeFalse();
  });

  it('should accept character attempted and fill correctly', () => {
    expect(word.attemptCharacter('t')).toBeTrue();
    expect(word.fillWord()).toEqual(['t', '', '', 't']);
    expect(word.charactersAttempted.includes('t')).toBeTrue();
    expect(word.charactersFound.includes('t')).toBeTrue();
  });
});
