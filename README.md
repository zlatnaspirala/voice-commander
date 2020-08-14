
# voice-commander #
## Typescript variant ##


### Install modules and run => ###
```js
  npm i
  npm run build
```

### Objective => ###

 This project will be npm package in future.
 Use chrome speech api , maybe bonus hybrid native app ...


### Command Line Interface for eslint - help ###

To run ESLint on Node.js, you must have npm installed. If npm is not installed, follow the instructions here: https://www.npmjs.com/

Once npm is installed, run the following

npm i -g eslint

This installs the ESLint CLI from the npm repository. To run ESLint, use the following format:

eslint [options] [file|dir|glob]*

Such as:

eslint class/voice-commander.ts

or:

eslint class/**
Please note that when passing a glob as a parameter, it will be expanded by your shell. The results of the expansion can vary depending on your shell, and its configuration. If you want to use node glob syntax, you have to quote your parameter (using double quotes if you need it to run in Windows), as follows:

eslint "class/**"
