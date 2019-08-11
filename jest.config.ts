module.exports = {
  transform: {
		'.(tsx?)$': 'babel-jest'
  },
  testEnvironment: 'node',
	// testMatch: ['**/*.test.ts'],
	testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: [
    '.d.ts$',
    '.test.ts',
    'src/index.ts',
    'src/util/config',
    'util/database/index.ts',
    'util/server/index.ts',
  ],
  collectCoverageFrom : ['src/**/*.ts', 'src/**/*.tsx'],
  moduleFileExtensions: [
		'ts',
		'tsx',
		'js',
		'json'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.ts',
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.json',
    }
  },
  moduleNameMapper: {
    '@config': '<rootDir>/src/util/config',
    '@database/(.*)': '<rootDir>/src/util/database/$1',
    // '@app': '<rootDir>/src/app.ts',
    // '@resources/(.*)': '<rootDir>/src/resources/$1',
    // '@seed': '<rootDir>/src/scripts/seed',
    // '@util/(.*)': '<rootDir>/src/util/$1',
  },

	modulePathIgnorePatterns: [
		'<rootDir>/dist/*'
	],
	moduleDirectories: [
		'node_modules',
		'<rootDir>/src'
	],
	snapshotSerializers: [
		'enzyme-to-json/serializer'
	],
	testPathIgnorePatterns: [
		'<rootDir>/dist/',
		'<rootDir>/www/'
	]
}
