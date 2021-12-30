import Character from '../Character';
import Bowerman from '../Bowerman';
import Swordsman from '../Swordsman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('should throw type Character', () => {
  expect(() => {
    new Character('name', 'type');
  }).toThrow();
});

test('should throw name Character', () => {
  expect(() => {
    new Character('m', 'Bowerman');
  }).toThrow();
});

test('level up character', () => {
  const char = new Character('name', 'Swordsman');
  char.health = 20;
  char.levelUp();
  expect(char.attack).toBe(48);
  expect(char.defence).toBe(12);
  expect(char.health).toBe(100);
  expect(char.level).toBe(2);
  expect(() => {
    char.health = 0;
    char.levelUp();
  }).toThrow()
});

test('damage character', () => {
  const char = new Character('name', 'Swordsman');
  char.damage(25);
  expect(char.health).toBe(77.5);
});

test('damage character', () => {
  const char = new Character('name', 'Swordsman');
  char.health = -2;
  char.damage(25);
  expect(char.health).toBe(-2);
});

test('test Bowerman', () => {
  const bower = new Bowerman('name');

  expect(bower.attack).toBe(25);
  expect(bower.defence).toBe(25);
  expect(bower).toBeInstanceOf(Character);
  expect(bower.type).toBe('Bowerman');
});

test('test Swordsman', () => {
  const swordsman = new Swordsman('name');

  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
  expect(swordsman.type).toBe('Swordsman');
});

test('test Daemon', () => {
  const daemon = new Daemon('name');

  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
  expect(daemon.name).toBe('name');
  expect(daemon).toBeInstanceOf(Character);
  expect(daemon.type).toBe('Daemon');
});

test('test Magician', () => {
  const magician = new Magician('name');

  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
  expect(magician.name).toBe('name');
  expect(magician).toBeInstanceOf(Character);
  expect(magician.type).toBe('Magician');
});

test('test Undead', () => {
  const undead = new Undead('name');

  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
  expect(undead.name).toBe('name');
  expect(undead).toBeInstanceOf(Character);
  expect(undead.type).toBe('Undead');
});

test('test Zombie', () => {
  const zombie = new Zombie('name');

  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
  expect(zombie.name).toBe('name');
  expect(zombie).toBeInstanceOf(Character);
  expect(zombie.type).toBe('Zombie');
});
