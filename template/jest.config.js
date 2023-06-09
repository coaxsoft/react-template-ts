// jest.config.js

module.exports = {
  roots: ["<rootDir>/src"],
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/__tests__/**",
    "!**/coverage/**",
    "!jest.config.js",
  ],
  setupFiles: ["react-app-polyfill/jsdom", "jest-canvas-mock"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js", "<rootDir>/src/__tests__/utils/setTestEnvVars.js"],
  testMatch: [
    "<rootDir>/src/__tests__/**/*.test.{js,jsx,ts,tsx}",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "/__tests__/utils/"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  modulePaths: [],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "\\.(css|sass|scss)$": "identity-obj-proxy",
    "swiper/css*": "identity-obj-proxy"
  },
  coveragePathIgnorePatterns: ["/__tests__/utils/"],
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  resetMocks: false
};
