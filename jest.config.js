module.exports = {
  projects: [
    {
      displayName: 'web',
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      rootDir: 'apps/web',
      testMatch: ['**/__tests__/**/*.test.ts(x)?', '**/*.test.ts(x)?'],
      collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/index.ts',
        '!src/**/*.stories.tsx',
      ],
      coverageThreshold: {
        global: {
          branches: 50,
          functions: 50,
          lines: 50,
          statements: 50,
        },
      },
    },
  ],
  collectCoverageFrom: [
    'apps/**/src/**/*.{ts,tsx}',
    'packages/**/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
  ],
  coverageDirectory: 'coverage',
};
