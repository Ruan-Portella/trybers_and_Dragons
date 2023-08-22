import Race from './Race';

export default class Orc extends Race {
    public static instances: number = 0;
    private _maxLifePoints: number 

    constructor(name: string, dexterity: number) {
        super(name, dexterity)
        this._maxLifePoints = 74;
    }

    public get maxLifePoints(): number {
        return this._maxLifePoints;
    }

    public static createdRacesInstances(): number {
        Orc.instances += 1;
        return Orc.instances;
    }
}