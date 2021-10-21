# agogpixel/phaser3-cordova-project-starter

Another opinionated [Phaser 3](https://github.com/photonstorm/phaser) project starter with [Cordova](https://cordova.apache.org/), [TypeScript](https://www.typescriptlang.org/), [webpack](https://webpack.js.org/), [Sass](https://sass-lang.com/), & [jest](https://jestjs.io/).

Code style/formatting with [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/); pre-commit hook via [Husky](https://typicode.github.io/husky) & [lint-staged](https://github.com/okonet/lint-staged).

## Getting Started

Create a new repository from this template - see [Creating a repository from a template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template) for more information.

Alternatively:

```shell
git clone https://github.com/agogpixel/phaser3-cordova-project-starter.git <repo>
cd <repo>
rm -rf .git
git init
git branch -M <branch-name>
git add .
git commit -m "Initial commit."
git remote add origin https://github.com/<account>/<repo>.git
git push -u origin <branch-name>
```

Once the project template has been setup locally, install dependencies:

```shell
npm install
```

## Usage

This project starter provides facilities for customizing Phaser namespace build and load functionality. See [phaser.js](./src/phaser/phaser.js) for customizing a Phaser build based on the currently installed Phaser NPM package.

### File Structure

```text
phaser3-cordova-project-starter/
 |
 ├──.github/                           * GitHub configurations.
 |   |
 |   ├──workflows/                     * GitHub Actions configurations.
 |   |   ├──test-build-deploy.yml      * Example CI/CD configuration (manual trigger).
 |   |   └──test.yml                   * Example CI configuration (on push, all branches).
 |   |
 |   └──CODEOWNERS                     * Define who is responsible for code in the repository.
 │
 ├──.husky/                            * Git hooks managed via husky.
 |   ├──.gitignore                     * Git ignore file.
 |   └──pre-commit                     * Git pre-commit hook.
 │
 ├──.vscode/                           * VSCode configurations.
 |   └──settings.json                  * Example configuration with auto-formatting on save.
 │
 ├──plugins/                           * Cordova plugins.
 |   ├──.gitignore                     * Git ignore file.
 |   ├──android.json                   * Cordova android platform config.
 |   ├──browser.json                   * Cordova browser platform config.
 |   ├──electron.json                  * Cordova electron platform config.
 |   ├──fetch.json                     * Cordova plugin fetch config.
 |   ├──ios.json                       * Cordova ios platform config.
 |   ├──osx.json                       * Cordova osx platform config.
 |   └──windows.json                   * Cordova windows platform config.
 │
 ├──src/                               * Source files.
 |   |
 |   ├──app/                           * Application files.
 |   |   |
 |   |   ├──scenes/                    * Phaser scenes.
 |   |   |   ├──boot-scene.spec.ts     * Boot scene unit tests.
 |   |   |   ├──boot-scene.ts          * Boot scene suitable for loading and initializing functionality required in other scenes.
 |   |   |   ├──index.ts               * Exported scenes for use in game configuration.
 |   |   |   ├──main-scene.spec.ts     * Main scene unit tests.
 |   |   |   ├──main-scene.ts          * Main scene suitable for game logic and display.
 |   |   |   ├──preload-scene.spec.ts  * Preload scene unit tests.
 |   |   |   └──preload-scene.ts       * Preload scene suitable for game asset load & progress display.
 |   |   |
 |   |   ├──app.spec.ts                * App factory unit tests.
 |   |   ├──app.ts                     * App factory.
 |   |   ├──game-config.ts             * Phaser game configuration.
 |   |   └──index.ts                   * Exported app factory and game config for use in application bootstrapping.
 |   |
 |   ├──assets/                        * Asset files.
 |   |   |
 |   |   └──textures/                  * Texture files.
 |   |       └──phaser3.png            * Example image.
 |   |
 |   ├──phaser/                        * Phaser files.
 |   |   ├──index.ts                   * Exported Phaser factory.
 |   |   ├──phaser-factory.spec.ts     * Phaser factory unit tests.
 |   |   ├──phaaser-factory.ts         * Phaser factory api.
 |   |   └──phaser.js                  * Custom Phaser build based on currently installed Phaser NPM package.
 |   |
 |   ├──styles/                        * Styling.
 |   |   └──styles.scss                * Global styles.
 |   |
 |   ├──index.html                     * HTML template.
 |   └──index.ts                       * Bootstrap & run the application.
 |
 ├──webpack/                           * Webpack configurations.
 |   ├──common-config.ts               * Common configuration.
 |   ├──development-config.ts          * Development configuration.
 |   ├──models.ts                      * Models for webpack build support.
 |   ├──phaser-config.ts               * Phaser configuration.
 |   └──production-config.ts           * Production configuration.
 |
 ├──www/                               * Required by Cordova; build artifacts.
 |
 ├──.editorconfig                      * EditorConfig configurations.
 ├──.eslintignore                      * ESLint ignore file.
 ├──.eslintrc                          * ESLint configurations.
 ├──.gitignore                         * Git ignore file.
 ├──.npmrc                             * NPM configuration.
 ├──.prettierignore                    * Prettier ignore configuration.
 ├──.prettierrc                        * Prettier configuration.
 ├──config.xml                         * Cordova configuration.
 ├──jest.config.js                     * Jest test framework configuration.
 ├──LICENSE                            * Project license.
 ├──package-lock.json                  * Auto-generated NPM project configuration.
 ├──package.json                       * NPM project configuration.
 ├──README.md                          * Project README.
 ├──tsconfig.json                      * TypeScript configuration.
 ├──tsconfig.webpack.json              * TypeScript configuration for webpack.
 └──webpack.config.ts                  * Webpack configuration.
```

### Develop

Live development for **platform** (`android`, `browser`, `electron`, `ios`, `osx`, or `windows`) via webpack-dev-server & cordova:

```shell
npm run cordova:run:<platform>
```

By default, `npm start` will run live development for the `browser` platform.

### Lint

Errors & warnings output to stdout via eslint:

```shell
npm run lint
```

Automatically fix fomatting issues (_careful_):

```shell
npm run lint:fix
```

### Unit Test

Unit tests with coverage reporting output to `coverage/` via jest:

```shell
npm test
```

### Build

Build for **platform** (`android`, `browser`, `electron`, `ios`, `osx`, or `windows`) with **environment** (`development` or `production`), output goes to `www/` via webpack & cordova:

```shell
npm run cordova:build:<platform>:<environment>
```

By default, `npm run build` will build for the `browser` platform with a `production` environment.

## Contributing

Discuss the change you wish to make via issue or email.

## License

Licensed under the [MIT License](./LICENSE).
