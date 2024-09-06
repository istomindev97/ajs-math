export default class Character {
  constructor(name, type) {
    const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('поле name не соответствует заданным правилам');
    }

    if (typeof type !== 'string' || !allowedTypes.includes(type)) {
      throw new Error('поле type не соответствует заданным правилам');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;

    this.magic = false;
    this.stoned = false;
  }

  get attackValue() {
    if (this.magic) {
      return this.attack;
    }
    return 'этот геттер применим только к магическим персонажам';
  }

  // Передаем значение дистанции в клетках
  set attackValue(distance) {
    const distanceFactor = Math.max(1 - (distance - 1) * 0.1, 0);
    let finalAttack = this.attack * distanceFactor;

    if (this.stoned) {
      finalAttack -= Math.log2(distance) * 5;
    }

    this.attack = Math.max(finalAttack, 0); // Защита от отрицательной атаки
  }

  get stonedValue() {
    return this.stoned;
  }

  set stonedValue(value) {
    if (typeof value === 'boolean') {
      this.stoned = value;
    }
  }
}
