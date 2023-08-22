import Race from './Race';

export default class Elf extends Race {
  public static instances = 0;
  private _maxLifePoints: number; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Elf.instances += 1;
    return Elf.instances;
  }
}