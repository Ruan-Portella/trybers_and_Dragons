import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number ;
  private _strength: number ;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  public receiveDamage(damage: number): number {
    this._lifePoints -= damage;
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }
}
