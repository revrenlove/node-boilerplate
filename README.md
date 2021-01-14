# Boilerplate

A boilerplate for a node web api application. It's designed to work out-of-the-box.

## Why?

The JavaScript ecosystem is intimidating. There are numerous options for everything, each of which having a mountain of the write and wrong ways to use said options, and even more reasons why or why not to use said options, and yet even more still opinions on which tools to use with them. I'm all about the "lego" mentality, but at a certain point, I mean... Fuck! I don't want to have to sift through tabs and tabs of dox just to return `Hello, world` from my API.

So, here's this...

A boilerplate for a [Node.js®](https://nodejs.org/en/) backend api written in [TypeScript](https://www.typescriptlang.org/). It has [Mocha](https://mochajs.org/) for unit tests. If you follow the instructions, it should work out of the box for anyone... If it doesn't, please, log an issue, and it will be attended to.

## TL;DR

`git clone https://github.com/revrenlove/node-boilerplate`

`cd node-boilerplate`

`npm install`

`npm start`

`curl localhost:8080/api/greeter?name=Bill`

- Should return: `Hello, Bill!`

### Building

`npm run build`

### Testing

`npm test`

## Requirements

- [Node.js®](https://nodejs.org/en/)

### Recommended

- [Visual Studio Code](https://code.visualstudio.com/)

  There are included vscode specific settings included to streamline things.

  [See Below](#visual-studio-code).

#### Windows-specific

- [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

  Using WSL on Windows is just a smoother developer experience.

## Includes

- [TypeScript](https://www.typescriptlang.org/)

- [ESLint](https://eslint.org/)

- [typescript-ioc](https://github.com/thiagobustamante/typescript-ioc)

  IoC container for typescript.

- [module-alias](https://github.com/ilearnio/module-alias)

  Allows your transpiled code to actually make use of the `paths` section of your `tsconfig.json` file.

- [Mocha](https://mochajs.org/)

  For testing.

- [Chai Assertion Library](https://www.chaijs.com/)

  Assertion library.

## Config files

### `eslintrc.json`

Has all the rules/config for ESLint.

### `mocharc.jsonc`

Config settings for mocha when running it from the command line.

- `ts-node/register` - for compilation.

- `module-alias/register` - for path alias recognition.

### `package.json`

#### `scripts`

- `clean` - removes `dist` folder.

- `build` - runs `clean` and builds app.

- `start` - cleans, builds, and starts app.

- `test` - runs `mocha` with settings in `mocharc.jsonc`.

#### `_moduleAliases`

Needed for `module-alias` package. Should match keys in `paths` of `tsconfig.json` as such (note the lack of wildcard in `package.json`):

`package.json`

```json
{
  // ...
  "_moduleAliases": {
    "@service": "dist/service"
    // ...
  }
  // ...
}
```

`tsconfig.json`

```json
{
  "compilerOptions": {
    // ...
    "paths": {
      "@service/*": ["./src/service"]
      // ...
    }
    // ...
  }
}
```

### `tsconfig.json`

`include` key is for including any source files that you want VSCode to recognize.

#### `tsconfig-build.json`

Used only for build to exclude the `test` folder in compilation.

## Visual Studio Code

After cloning and prior to opening in Visual Studio Code, go ahead and run the install and build commands to prevent it barking at you.

`npm install`

`npm run build`

Once you have the folder open in Visual Studio Code, it will prompt you to download some recommended extensions... Do that...

### Recommended Extensions

#### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Code linter for TypeScript and JavaScript

#### [Mocha Sidebar](https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar)

Sidebar test runner for Mocha Tests

## TODO: List

- Finish this documentation...
