class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  get name() {
    return this.$name;
  }

  set name(value) {
    if (value.length < 2 || value.length > 10) {
      throw new Error('имя - min - 2 символа, max - 10');
    }
    this.$name = value;
  }

  get type() {
    return this.$type;
  }

  set type(value) {
    if (
      value === 'Bowerman'
      || value === 'Swordsman'
      || value === 'Magician'
      || value === 'Daemon'
      || value === 'Undead'
      || value === 'Zombie'
    ) {
      this.$type = value;
    } else {
      throw new Error(
        'тип может быть только Bowman, Swordsman, Magician, Daemon, Undead, Zombie',
      );
    }
  }

  levelUp() {
    if (this.health < 1) {
      throw new Error('нельзя повысить левел умершего');
    }
    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export default Character;
