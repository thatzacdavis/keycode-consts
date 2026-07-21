import { describe, expect, it } from 'vitest';
import keyCodes, { KeyCode } from '../src/index';

describe('KeyCode', () => {
    it('sets every field from the constructor', () => {
        const kc = new KeyCode('0x41', 65, 'A', 'The A key.', 'A');
        expect(kc.HexValue).toBe('0x41');
        expect(kc.NumericValue).toBe(65);
        expect(kc.KeyCode).toBe(65);
        expect(kc.ShortDescription).toBe('A');
        expect(kc.LongDescription).toBe('The A key.');
        expect(kc.Key).toBe('A');
    });

    it('applies defaults for optional LongDescription and Key', () => {
        const kc = new KeyCode('0x15', 21, 'Kana');
        expect(kc.LongDescription).toBe('');
        expect(kc.Key).toBe('');
    });
});

describe('keyCodes', () => {
    it('exposes well-known key codes', () => {
        expect(keyCodes.ENTER.NumericValue).toBe(13);
        expect(keyCodes.ESCAPE.NumericValue).toBe(27);
        expect(keyCodes.SPACE.Key).toBe(' ');
    });

    it('exposes lowercase and uppercase letters as distinct entries', () => {
        expect(keyCodes.a.Key).toBe('a');
        expect(keyCodes.A.Key).toBe('A');
        expect(keyCodes.a).not.toBe(keyCodes.A);
        // Both share the same physical key code.
        expect(keyCodes.a.NumericValue).toBe(65);
        expect(keyCodes.A.NumericValue).toBe(65);
    });

    it('represents UNIDENTIFIED with a numeric value of -1', () => {
        expect(keyCodes.UNIDENTIFIED.NumericValue).toBe(-1);
        expect(keyCodes.UNIDENTIFIED.Key).toBe('Unidentified');
    });
});
