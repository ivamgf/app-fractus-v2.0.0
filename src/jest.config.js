/* eslint-disable no-undef */
// jest.config.js

module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
    preset: 'ts-jest',
    transform: {
      '\\.(jpg|jpeg|png|svg)$': 'ts-jest',
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
    bail: 1,
    verbose: true,
    testEnvironment: 'jsdom',
}
