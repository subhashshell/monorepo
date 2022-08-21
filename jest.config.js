module.exports = {
  coveragePathIgnorePatterns: [
      "node_modules",
      "test-config",
      "interfaces",
      "jestGlobalMocks.ts",
      ".module.ts",
      "firsr/src/index.tsx",
  ],
  testEnvironment: "jsdom",
  preset: 'ts-jest/presets/js-with-ts',
  setupFilesAfterEnv: [        
    "@testing-library/jest-dom/extend-expect"
  ], 
  coverageThreshold: {
      global: {
          branches: 90,
          functions: 90,
          lines: 90,
          statements: 90,
      },
  },
  collectCoverageFrom: [
    "first/src/**/*.{ts,tsx}",
    "second/src/**/*.{ts,tsx}",
    "!first/src/bootstrap.tsx",
    "!second/src/bootstrap.tsx",
    "!first/src/setupTests.ts",
    "!second/src/setupTests.ts",
    "!first/src/index.ts",
    "!second/src/index.ts",
    "!first/src/react-app-env.d.ts",
    "!second/src/react-app-env.d.ts"
  ],
};