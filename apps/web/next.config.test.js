/* eslint-env jest */

const nextConfig = require('./next.config');

describe('next.config rewrites', () => {
  it('rewrites /status to /api/status for hosting probes', async () => {
    const rewrites = await nextConfig.rewrites();

    expect(rewrites).toContainEqual({
      source: '/status',
      destination: '/api/status',
    });
  });
});
