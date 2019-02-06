module.exports = {
  preset: "jest-preset-angular",
  roots: ['src'],
  setupTestFrameworkScriptFile: "<rootDir>/src/setup-jest.ts",
  moduleNameMapper: {
    '@pages/(.*)': '<rootDir>/src/app/@pages/$1',
    '@sdk/(.*)': '<rootDir>/@sdk/$1'
  }
}
