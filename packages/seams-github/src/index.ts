export interface GitHubSeamOptions {
  readonly baseUrl: string
}

export interface GitHubSeam {
  readonly baseUrl: string
}

export const DEFAULT_GITHUB_API_BASE_URL = 'https://api.github.com'

export const createGitHubSeam = (options: GitHubSeamOptions = { baseUrl: DEFAULT_GITHUB_API_BASE_URL }): GitHubSeam => ({
  baseUrl: options.baseUrl,
})
