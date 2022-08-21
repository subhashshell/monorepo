module.exports = {
    coveragePathIgnorePatterns: [
        "node_modules",
        "test-config",
        "interfaces",
        "jestGlobalMocks.ts",
        ".module.ts",
        "src/index.tsx",
    ],
    collectCoverage: true,
    coverageReporters: ["json", "html"],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
};