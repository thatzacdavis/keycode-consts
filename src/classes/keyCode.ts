class KeyCode {
    public readonly HexValue: string;
    public readonly KeyCode: number;
    public readonly NumericValue: number;
    public readonly ShortDescription: string;
    public readonly LongDescription: string;
    public readonly Key: string;

    constructor(HexValue: string, NumericValue: number, ShortDescription: string, LongDescription: string = '', Key: string = '') {
        this.HexValue = HexValue;
        this.KeyCode = NumericValue;
        this.NumericValue = NumericValue;
        this.ShortDescription = ShortDescription;
        this.LongDescription = LongDescription;
        this.Key = Key;
    }
}

export default KeyCode;
