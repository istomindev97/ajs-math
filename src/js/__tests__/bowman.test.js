import Bowman from '../bowman';

test('should create a Bowman character with correct properties', () => {
    const bowman = new Bowman('Legolas');
    const expectedBowman = {
        name: 'Legolas',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
        magic: false,
        stoned: false,
    }

    expect(bowman).toEqual(expectedBowman);
  });

  test('should throw an error if name is not a string', () => {
    expect(() => new Bowman(123)).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is less than 2 characters', () => {
    expect(() => new Bowman('L')).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is more than 10 characters', () => {
    expect(() => new Bowman('SuperLongName')).toThrow('поле name не соответствует заданным правилам');
  });