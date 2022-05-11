class KeyCode {
    constructor(HexValue, NumericValue, ShortDescription, LongDescription = '', Key = '') {
        this.HexValue = HexValue;
        this.KeyCode = NumericValue;
        this.NumericValue = NumericValue;
        this.ShortDescription = ShortDescription;
        this.LongDescription = LongDescription;
        this.Key = Key;
    }
}

export default KeyCode;