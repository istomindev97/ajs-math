import Character from '../character';

test('should create a character with valid properties', () => {
  const character = new Character('Mage', 'Magician');
  const expected = {
    name: 'Mage',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
    magic: false,
    stoned: false
  };
  expect(character).toEqual(expected);
});


test('должен выкинуть ошибку если имя меньше 2 символов', () => {
  expect(() => new Character('A', 'Magician')).toThrow('поле name не соответствует заданным правилам');
});

test('должен выкинуть ошибку если имя больше 10 символов', () => {
  expect(() => new Character('VeryLongName', 'Magician')).toThrow('поле name не соответствует заданным правилам');
});

test('должно выкидывать ошибку если тип невалидный', () => {
  expect(() => new Character('Mage', 'Warrior')).toThrow('поле type не соответствует заданным правилам');
});


test('должен вернуть значение атаки для мага', () => {
  const character = new Character('Mage', 'Magician');
  character.magic = true;
  character.attack = 100;
  expect(character.attackValue).toBe(100); 
});


test('should return a message from attackValue for non-magical character', () => {
  const character = new Character('Warrior', 'Swordsman');
  expect(character.attackValue).toBe('этот геттер применим только к магическим персонажам');
});


test('should calculate attack without stoned effect', () => {
  const character = new Character('Mage', 'Magician');
  character.attack = 100;
  character.magic = true;
  character.attackValue = 2; 
  const expectedAttack = 90; 
  expect(character.attack).toBe(expectedAttack);
});


test('should calculate attack with stoned effect', () => {
  const character = new Character('Mage', 'Magician');
  character.attack = 100;
  character.magic = true;
  character.stonedValue = true; 
  character.attackValue = 2; 
  const expectedAttack = 85; 
  expect(character.attack).toBe(expectedAttack);
});


test('should not allow attack to be less than zero', () => {
  const character = new Character('Mage', 'Magician');
  character.attack = 10;
  character.magic = true;
  character.stonedValue = true;
  character.attackValue = 10; 
  expect(character.attack).toBe(0); 
});

test('should set and get stonedValue correctly', () => {
  const character = new Character('Mage', 'Magician');
  character.stonedValue = true;
  expect(character.stoned).toBe(true); 
  character.stonedValue = false;
  expect(character.stoned).toBe(false); 
});


test('should not change stonedValue if passed non-boolean value', () => {
  const character = new Character('Mage', 'Magician');
  character.stonedValue = 'invalid'; 
  expect(character.stoned).toBe(false); 
});

test('should get the correct stonedValue', () => {
  const character = new Character('Mage', 'Magician');

  expect(character.stonedValue).toBe(false); 

  character.stonedValue = true;
  expect(character.stonedValue).toBe(true); 
});
