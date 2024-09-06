import Swordsman from '../swordsman';

test('should create a Swordsman character with correct properties', () => {

  const character = new Swordsman('Merlin');
  const expected = {
    attack : 40,
    defence : 10,
    health: 100, 
    level: 1,
    name: 'Merlin',
    type: 'Swordsman',
    magic: false,
    stoned: false,
  }

expect(character).toEqual(expected)
});

  test('should throw an error if name is not a string', () => {
    expect(() => new Swordsman(123)).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is less than 2 characters', () => {
    expect(() => new Swordsman('M')).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is more than 10 characters', () => {
    expect(() => new Swordsman('SuperLongName')).toThrow('поле name не соответствует заданным правилам');
  });