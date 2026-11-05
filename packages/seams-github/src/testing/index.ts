import type { GitHubSeam } from '../index'

export const FAKE_GITHUB_API_BASE_URL = 'https://github.fake.invalid'

export const createFakeGitHubSeam = (baseUrl: string = FAKE_GITHUB_API_BASE_URL): GitHubSeam => ({
  baseUrl,
})
