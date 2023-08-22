import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private readonly _damage: EnergyType;
  private static instances = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
  }

  get energyType(): EnergyType {
    return this._damage;
  }

  static createdArchetypeInstances(): number {
    Warrior.instances += 1;
    return Warrior.instances;
  }
}
