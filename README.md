# Node/Express/TypeScript Boilerplate

A boilerplate for a node web api application.

I built this to be a simple clone and go for developing apps utilizing node, TypeScript, ESLint, and express with baked-in unit testing and an IoC container. I found many projects that implemented some of these, many projects that had everything you needed to build a space shuttle, and many projects/tutorials that required quite a bit of configuration (that seemingly never worked.) that but nothing with these meager requirements fulfilled, where everything just worked right out of the box.

## TL;DR

`git clone https://github.com/revrenlove/node-boilerplate`

`npm install`

`npm start`

`curl localhost:8080/api/greeter?name=Bill`

- Should return: `Hello, Bill!`

## Requirements

- [Node.js®](https://nodejs.org/en/)

### Recommended

- [Visual Studio Code](https://code.visualstudio.com/)

  There are included vscode specific settings included to streamline things.

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

## Recommended Extensions

### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Code linter for TypeScript and JavaScript

### [Mocha Sidebar](https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar)

Sidebar test runner for Mocha Tests

## TODO: List

- Finish this documentation...
