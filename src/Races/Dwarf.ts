import Race from './Race';

export default class Dwarf extends Race {
  public static instances = 0;
  private _maxLifePoints: number; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Dwarf.instances += 1;
    return Dwarf.instances;
  }
}