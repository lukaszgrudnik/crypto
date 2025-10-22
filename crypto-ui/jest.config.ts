import type { Config } from 'jest';

const config: Config = {
  // jsdom is a Node.js library that simulates a web browser’s DOM, allowing you to run and test browser-based JavaScript (like React components) outside of a real browser.
  testEnvironment: 'jsdom',
  transform: {
    // https://huafu.github.io/ts-jest/user/config/
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  roots: ['<rootDir>/apps/shell/src', '<rootDir>/apps/market/src', '<rootDir>/apps/wallet/src'],
};

module.exports = config;
