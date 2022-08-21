module.exports = {
  coveragePathIgnorePatterns: [
      "node_modules",
      "test-config",
      "interfaces",
      "jestGlobalMocks.ts",
      ".module.ts",
      "firsr/src/index.tsx",
  ],
  coverageThreshold: {
      global: {
          branches: 90,
          functions: 90,
          lines: 90,
          statements: 90,
      },
  },
};