import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monster: (Fighter | SimpleFighter)[];

  constructor(player: Fighter, monster: (Fighter | SimpleFighter)[]) {
    super(player);
    this._monster = monster;
  }

  private attackPlayer(): void {
    for (let i = 0; i < this._monster.length; i += 1) {
      this.player.attack(this._monster[i]);
    }
  }

  private attackMonster(): void {
    for (let i = 0; i < this._monster.length; i += 1) {
      this._monster[i].attack(this.player);
      if (this.player.lifePoints === -1) break;
    }
  }

  public fight(): number {
    for (;;) {
      this.attackPlayer();
      if (this._monster.every((player) => player.lifePoints === -1)) return 1;
      this.attackMonster();
      if (this.player.lifePoints === -1) break;
    }
    return -1;
  }
}