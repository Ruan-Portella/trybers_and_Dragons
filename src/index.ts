import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Ruan');
const player2 = new Character('Portella');
const player3 = new Character('Morales');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();
const arrMonster = [monster1, monster2];

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, arrMonster);

function runBattles(battles: Battle[]): void {
  battles.map((battle) => battle.fight());
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};