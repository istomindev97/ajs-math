import Team from '../set';

import  Zombie  from '../zombie';

const team = new Team()

test('should add a single member to the team', () => {
    const zombie = new Zombie('Вася');
    team.add(zombie);
    expect(team.toArray()).toContain(zombie);
});

test('should throw an error when adding a duplicate member', () => {
    const zombie = new Zombie('Вася');
    team.add(zombie);
    expect(() => team.add(zombie)).toThrow('Такой персонаж уже добавлен');
});

test('should add multiple members to the team using addAll', () => {
    const zombie1 = new Zombie('Вася');
    const zombie2 = new Zombie('Петя');
    team.addAll(zombie1, zombie2);
    expect(team.toArray()).toContain(zombie1);
    expect(team.toArray()).toContain(zombie2);
});

