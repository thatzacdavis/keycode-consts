# keycode-consts

A collection of key code constants and utility functions for JavaScript and TypeScript.

Ships as a dual **ESM + CommonJS** package with bundled TypeScript type definitions.

## Install

```sh
npm install keycode-consts
```

## Usage

The default export is a map of named constants; each value is a `KeyCode` instance.

```ts
// ESM / TypeScript
import keyCodes, { KeyCode, type KeyCodes } from 'keycode-consts';

keyCodes.ENTER.NumericValue; // 13
keyCodes.ESCAPE.NumericValue; // 27
keyCodes.SPACE.Key; // ' '

// Lowercase and uppercase letters are separate entries that share a key code.
keyCodes.a.Key; // 'a'
keyCodes.A.Key; // 'A'
```

```js
// CommonJS
const keyCodes = require('keycode-consts').default;
const { KeyCode } = require('keycode-consts');

keyCodes.ENTER.NumericValue; // 13
```

Each `KeyCode` exposes: `HexValue`, `NumericValue` (aliased as `KeyCode`), `ShortDescription`, `LongDescription`, and `Key`.

## Development

This project pins its Node version with [nvm](https://github.com/nvm-sh/nvm). The recommended version is **Node 24**.

```sh
nvm use          # or `nvm install` on first setup — reads .nvmrc
npm install
```

Common tasks:

```sh
npm run build      # emit dist/esm + dist/cjs (+ .d.ts) via tsc
npm run typecheck  # strict type-check without emitting
npm test           # run the Vitest suite (npm run test:watch for watch mode)
npm run lint       # ESLint (typescript-eslint)
npm run format     # Prettier
```

The build runs `tsc` twice (one config per module format) and writes a per-folder
`package.json` marker into each output directory. Consumers resolve the right build
through the `exports` map in `package.json`.

## License

MIT
