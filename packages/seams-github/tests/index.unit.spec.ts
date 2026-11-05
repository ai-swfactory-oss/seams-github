import { describe, expect, it } from 'vitest'

import { createGitHubSeam, DEFAULT_GITHUB_API_BASE_URL } from '../src/index'
import { createFakeGitHubSeam, FAKE_GITHUB_API_BASE_URL } from '../src/testing/index'

describe('createGitHubSeam', () => {
  it('targets the public GitHub REST API by default', () => {
    expect(createGitHubSeam()).toEqual({ baseUrl: DEFAULT_GITHUB_API_BASE_URL })
  })

  it('targets the base URL it was given', () => {
    expect(createGitHubSeam({ baseUrl: 'https://ghe.example.com/api/v3' })).toEqual({
      baseUrl: 'https://ghe.example.com/api/v3',
    })
  })
})

describe('createFakeGitHubSeam', () => {
  it('targets the fake base URL by default', () => {
    expect(createFakeGitHubSeam()).toEqual({ baseUrl: FAKE_GITHUB_API_BASE_URL })
  })

  it('targets the base URL it was given', () => {
    expect(createFakeGitHubSeam('https://other.invalid')).toEqual({ baseUrl: 'https://other.invalid' })
  })
})
