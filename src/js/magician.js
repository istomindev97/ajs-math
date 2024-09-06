import Character from "./character";

export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 10, 40);
    this.attack = 10;
    this.defence = 40;

    this.magic = true;
  }
}
