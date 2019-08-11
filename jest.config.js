module.exports = {
  transform: {
		'.(tsx?)$': 'babel-jest'
  },
  testEnvironment: 'jsdom', // necessary for enzyme
	testMatch: ['**/*.(test|spec).ts', '**/*.(test|spec).tsx'],
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
  setupFilesAfterEnv: ['./enzyme.config.js'],
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.json',
    }
  },
  moduleNameMapper: {
    '@elements': '<rootDir>/src/elements',
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
};
