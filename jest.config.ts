export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',

  coverageReporters: [
    // "json",
    // "text",
    'lcov',
    // "clover"
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],

  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json',
      },
    ],
  },

  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
}
