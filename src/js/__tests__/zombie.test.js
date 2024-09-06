import Zombie from '../zombie';

test('should create a Zombie character with correct properties', () => {

  const character = new Zombie('Walker');
  const expected = {
    attack : 40,
    defence : 10,
    health: 100, 
    level: 1,
    name: 'Walker',
    type: 'Zombie',
    magic: false,
    stoned: false,
  }

  expect(character).toEqual(expected)});

  test('should throw an error if name is not a string', () => {
    expect(() => new Zombie(123)).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is less than 2 characters', () => {
    expect(() => new Zombie('W')).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is more than 10 characters', () => {
    expect(() => new Zombie('SuperLongName')).toThrow('поле name не соответствует заданным правилам');
  });