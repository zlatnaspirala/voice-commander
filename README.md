
# voice-commander

## Done in three variants
### `- Typescript variant`
### `- Tradicional ECMA5`
### `- ECMA6 [npm package]`

## Npm instalation
```js
  npm i voice-commander
```

## For npm users:

```js
import { VoiceCommander } from './voice-commander.js'
import { colorNamesGrammars } from './grammar-set/colors.js'

const options = {
  grammarData: colorNamesGrammars,
  callback: (r) => {
    console.log(r);
  }
}

const VoiceCommanderInstance = new VoiceCommander(options)

console.log(VoiceCommanderInstance)

// If you want make it global
window.vc = VoiceCommanderInstance;

// Activate listen operation
VoiceCommanderInstance.run()

```

### Command Line Interface for eslint - help

To run ESLint on Node.js, you must have npm installed. If npm is not installed, follow the instructions here: https://www.npmjs.com/

Once npm is installed, run the following
```js
  npm i -g eslint
```

This installs the ESLint CLI from the npm repository. To run ESLint, use the following format:
```js
  eslint [options] [file|dir|glob]*
```

Such as:
```js
eslint class/voice-commander.ts
```

or:

```js
eslint class/**
```

 - Please note that when passing a glob as a parameter, it will be expanded by your shell. The results of the expansion can vary depending on your shell, and its configuration. If you want to use node glob syntax, you have to quote your parameter (using double quotes if you need it to run in Windows), as follows:

```js
eslint "class/**"
```
