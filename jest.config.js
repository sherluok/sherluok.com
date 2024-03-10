// https://jestjs.io/
// https://jestjs.io/docs/configuration
// https://jestjs.io/docs/getting-started#using-typescript
module.exports = {
  transform: {
    // https://swc.rs/docs/usage/jest
    // https://github.com/swc-project/jest
    '^.+\\.[tj]sx?$': ['@swc/jest', {
      jsc: {
        parser: {
          syntax: 'typescript',
          tsx: true,
          decorators: true,
          dynamicImport: true
        },
        transform: {
          legacyDecorator: false,
          decoratorMetadata: false,
          decoratorVersion: '2022-03',
        },
      },
    }],
  },
};
