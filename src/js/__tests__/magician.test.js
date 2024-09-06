import Magician from '../magician';

test('should create a Magician character with correct properties', () => {

  const character = new Magician('Merlin');
  const expected = {
    attack : 10,
    defence : 40,
    health: 100, 
    level: 1,
    magic: true,
    name: 'Merlin',
    stoned: false,
    type: 'Magician',
  }

expect(character).toEqual(expected)
});

  test('should throw an error if name is not a string', () => {
    expect(() => new Magician(123)).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is less than 2 characters', () => {
    expect(() => new Magician('M')).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is more than 10 characters', () => {
    expect(() => new Magician('SuperLongName')).toThrow('поле name не соответствует заданным правилам');
  });