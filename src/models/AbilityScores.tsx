export default class AbilityScores
{
    constructor()
    {
        this._strength = 10
        this._dexterity = 10
        this._constitution = 10
        this._intelligence = 10
        this._wisdom = 10
        this._charisma = 10
    }
    private _strength:number
    private _dexterity:number
    private _constitution:number
    private _intelligence:number
    private _wisdom:number
    private _charisma:number
    get strengthScore():number
    {
        return this._strength;
    }
    set strengthScore(value:number)
    {
        this._strength = value;
    }
    get strengthMod():number
    {
        return this.getMod(this._strength)
    }
    get dexterityScore():number
    {
        return this._dexterity
    }
    set dexterityScore(value:number)
    {
        this._dexterity = value;
    }
    get dexterityMod():number
    {
        return this.getMod(this._dexterity)
    }
    get constitutionScore():number
    {
        return this._constitution;
    }
    set constitutionScore(value:number)
    {
        this._constitution = value;
    }
    get constitutionMod():number
    {
        return this.getMod(this._constitution)
    }
    get intelligenceScore():number
    {
        return this._intelligence;
    }
    set intelligenceScore(value:number)
    {
        this._intelligence = value;
    }
    get intelligenceMod():number
    {
        return this.getMod(this._intelligence)
    }
    get wisdomScore():number
    {
        return this._wisdom;
    }
    set wisdomScore(value:number)
    {
        this._wisdom = value;
    }
    get wisdomMod():number
    {
        return this.getMod(this._wisdom)
    }
    get charismaScore():number
    {
        return this._charisma;
    }
    set charismaScore(value:number)
    {
        this._charisma = value;
    }
    get charismaMod():number
    {
        return this.getMod(this._charisma)
    }
    private getMod(value:number) : number
    {
        return Math.floor( value / 2) - 5
    }
}