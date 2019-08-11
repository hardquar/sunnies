# 😎 Sunnies 😎

This is a component library to be consumed in React and React Native. Why React Native as well? I just want to build universal compatibility from the get-go.

The dev experience is going to be great, with TypeScript and Storybook. It will be key to figure out how TypeScript and Storybook can talk to each other, to esnure automatic documentation (with react-docgen or TypeDoc, possibly).

An additional challenge will be configuring the build process, so that I can publish to NPM to use on other projects. If I ever need to test locally, I should also be able to use `yarn link`.

## Local development

In the project root run the following:

```
$ yarn
$ yarn dev
```

## Local consumption

##### (Linking and Unlinking)

To _link_ your local `sunnies` with your local project, run:

```
$ yarn link && yarn watch
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

## Deployment process

### Commits and Deployments

`Sunnies` uses [auto-release](https://github.com/intuit/auto-release#readme) to automatically release on every PR. Every PR should have a label that matches one of the following

- Version: Trivial
- Version: Patch
- Version: Minor
- Version: Major

Major, minor, and patch will cause a new release to be generated. Use major for breaking changes, minor for new non-breaking features,
and patch for bug fixes. Trivial will not cause a release and should be used when updating documentation or non-project code.

If you don't want to release on a particular PR but the changes aren't trivial then use the `Skip Release` tag along side the appropriate version tag.


## Inspirations

* Material-UI
* Lucid
* Palette
