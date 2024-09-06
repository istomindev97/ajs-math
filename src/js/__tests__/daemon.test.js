import Daemon from '../daemon';

test('should create a Daemon character with correct properties', () => {
  
    const character = new Daemon('Inferno');
    const expected = {
      attack : 10,
      defence : 40,
      health: 100, 
      level: 1,
      magic: true,
      name: 'Inferno',
      stoned: false,
      type: 'Daemon',
    }
  
  expect(character).toEqual(expected)
  });

  test('should throw an error if name is not a string', () => {
    expect(() => new Daemon(123)).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is less than 2 characters', () => {
    expect(() => new Daemon('I')).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is more than 10 characters', () => {
    expect(() => new Daemon('SuperLongName')).toThrow('поле name не соответствует заданным правилам');
  });