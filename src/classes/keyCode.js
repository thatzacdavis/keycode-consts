class KeyCode {
    constructor(HexValue, NumericValue, ShortDescription, LongDescription = '') {
        this.HexValue = HexValue;
        this.KeyCode = NumericValue;
        this.NumericValue = NumericValue;
        this.ShortDescription = ShortDescription;
        this.LongDescription = LongDescription;
    }
}

export default KeyCode;