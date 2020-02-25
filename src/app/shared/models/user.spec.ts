import { User, IUser } from './user';

describe('User', () => {
  let user: IUser;

  beforeEach(() => {
    user = new User('toto');
  });

  it('should create an instance', () => {
    expect(user).toBeTruthy();
  });

  it('should instanciate correctly the user', () => {
    expect(user.name).toEqual('toto');
    expect(user.wordsFound).toEqual([]);
    expect(user.jokers).toEqual(5);
  });
});
