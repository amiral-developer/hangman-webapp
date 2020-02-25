import { Game, IGame } from './game';
import { IUser, User } from './user';

describe('Game', () => {
  let game: IGame;
  let user: IUser;

  beforeEach(() => {
    user = new User('toto')
    game = new Game(user);
  });

  it('should create an instance', () => {
    expect(game).toBeTruthy();
  });

  it('should instanciate correctly the game', () => {
    expect(game.user).toEqual(user);
    expect(game.words).toEqual([]);
    expect(game.currentWord).toEqual(undefined);
  });
});
