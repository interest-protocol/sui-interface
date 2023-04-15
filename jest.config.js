const nextJest = require('next/jest')

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  rootDir: './',
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__test__/__mocks__/fileMock.js',
    "@/sdk/(.*)$": "<rootDir>/lib/$1",
    "@/api": "<rootDir>/api-middleware/index",
    "@/api/(.*)$": "<rootDir>/api-middleware/$1",
    "@/sdk": "<rootDir>/lib/index",
    "@/HOC": "<rootDir>/components/hoc/index",
    "@/components": "<rootDir>/components/index",
    "@/context/(.*)$": "<rootDir>/context/$1",
    "@/constants/(.*)$": "<rootDir>/constants/$1",
    "@/constants": "<rootDir>/constants/index",
    "@/design-system": "<rootDir>/design-system",
    "@/design-system/(.*)$": "<rootDir>/design-system/$1",
    "@/state/(.*)$": "<rootDir>/state/$1",
    "@/svg/(.*)$": "<rootDir>/components/svg/$1",
    "@/svg": "<rootDir>/components/svg/index",
    "@/utils/(.*)$": "<rootDir>/utils/$1",
    "@/utils": "<rootDir>/utils/index",
    "@/elements/(.*)$": "<rootDir>/elements/$1",
    "@/elements": "<rootDir>/elements/index",
    "@/hooks/(.*)$": "<rootDir>/hooks/$1",
    "@/hooks": "<rootDir>/hooks/index",
    "@/interface": "<rootDir>/interface/index",
    "@/views/(.*)$": "<rootDir>/views/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
