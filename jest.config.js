const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });
const customJestConfig = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};

module.exports = createJestConfig(customJestConfig);
