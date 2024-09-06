import Undead from '../undead';

test('should create an Undead character with correct properties', () => {

  const character = new Undead('Zombie');
  const expected = {
    attack : 25,
    defence : 25,
    health: 100, 
    level: 1,
    name: 'Zombie',
    type: 'Undead',
    magic: false,
    stoned: false,
  }

  expect(character).toEqual(expected)});

  test('should throw an error if name is not a string', () => {
    expect(() => new Undead(123)).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is less than 2 characters', () => {
    expect(() => new Undead('Z')).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is more than 10 characters', () => {
    expect(() => new Undead('SuperLongName')).toThrow('поле name не соответствует заданным правилам');
  });