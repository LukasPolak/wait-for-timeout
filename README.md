# wait-for-timeout

![checks-status](https://img.shields.io/github/checks-status/LukasPolak/wait-for-timeout/main?style=flat-square) ![workflow/status](https://img.shields.io/github/workflow/status/lukaspolak/wait-for-timeout/CI?style=flat-square) ![codecov](https://img.shields.io/codecov/c/github/lukaspolak/wait-for-timeout?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@lukaspolak/wait-for-timeout?style=flat-square) ![npm](https://img.shields.io/npm/v/@lukaspolak/wait-for-timeout?style=flat-square)

Promise based utility function that return a value after specified timeout.

## Demo

[CodeSandbox](https://codesandbox.io/s/wait-for-timeout-o6291?file=/src/App.tsx)

## Getting started

To use this package, you only need to install this dependency, import it and invoke the `waitForTimeout` function, e.g.:

```ts
const response = waitForTimeout<boolean>(() => {
  return true
}, 500)

//...

await response // returns `true` after 500ms
```

### Install

```bash
npm install @lukaspolak/wait-for-timeout
```

or

```bash
yarn add @lukaspolak/wait-for-timeout
```

## Contributing

Please read the [Contribution guidelines](.github/CONTRIBUTING.md) to start with your awesome contributions!

## Why the library is prefixed with `@lukaspolak/`

There are a lot of similar libraries/packages on [GitHub](https://github.com/features/packages) and [npm](https://www.npmjs.com/), that can do the same. I wanted to enhance my programming skills, and I didn't want to find a unique name for the package.

## INITIALIZATION TODO
