<p align="center">
  <a href="http://sunnies.com">
    <img src="https://github.com/hardquar/sunnies/blob/master/packages/sunnies/assets/img/icon-large.png?raw=true" width="320" alt="Sunnies logo"/>
  </a>
</p>

<p align="center">
<img src="https://travis-ci.com/sunnies/example.svg?branch=master" alt="Travis-CI status" height="18">
<a href="https://codecov.io/gh/sunnies/example?branch=master">
  <img src="https://codecov.io/gh/sunnies/example/coverage.svg?branch=master" alt="Codecov coverage" height="18">
</a>
</p>

<p align="center">
😎 Stylish component library for stylish people 😎
</p>

## What is Sunnies?

This is a component library to be consumed in React and React Native. More notes to come.

## Local development

In the project root run the following:

```
$ yarn
$ yarn dev
```

### Tooling

Add the following to your VSCode editor's settings to get linting to work in the IDE:

```
"eslint.validate": [
  "javascript",
  "javascriptreact",
  {
    "language": "typescript",
    "autoFix": true
  },
  {
    "language": "typescriptreact",
    "autoFix": true
  }
]
```

## Local consumption

##### (Linking and Unlinking)

To _link_ your local `sunnies` with your local project, run:

```
$ yarn workspace sunnies link && yarn workspace sunnies watch
```
(wait until you see a message that X files have been successfully compiled before moving on)

```
$ cd ../<your_project> && yarn link sunnies && yarn start
```
To _unlink_ your local `sunnies` from your local project, run (in **<your_project>**):

```
$ yarn unlink sunnies
$ yarn add sunnies
$ yarn start
```

## Development process

### How to contribute

If you'd like to add a new component to `Sunnies` please:

1. Create an issue using the component spec template. That'll give both design and engineering a chance to peek at the proposal and provide feedback before moving forward.
2. Create a feature branch and perform any work you are doing.
3. Create a pull request using the feature branch template.

Note: Any breaking changes should be noted in `CHANGELOG.md`.

### Commits and Deployments

`Sunnies` uses [auto-release](https://github.com/intuit/auto-release#readme) to automatically release on every PR. Every PR should have a label that matches one of the following

- Version: Trivial
- Version: Patch
- Version: Minor
- Version: Major

Major, minor, and patch will cause a new release to be generated. Use major for breaking changes, minor for new non-breaking features,
and patch for bug fixes. Trivial will not cause a release and should be used when updating documentation or non-project code.

If you don't want to release on a particular PR but the changes aren't trivial then use the `Skip Release` tag along side the appropriate version tag.

### Publishing

Run the following to publish to NPM:

```
npm publish --access public
```

## Inspirations

* Material-UI
* Lucid
* Palette
