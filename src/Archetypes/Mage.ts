import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private readonly _damage: EnergyType;
  private static instances = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'mana';
  }

  get energyType(): EnergyType {
    return this._damage;
  }

  static createdArchetypeInstances(): number {
    Mage.instances += 1;
    return Mage.instances;
  }
}
