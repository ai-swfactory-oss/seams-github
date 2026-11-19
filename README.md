# seams-github

seams-github is the seam for the GitHub REST API: a typed SDK that the rest of the code calls instead of reaching GitHub directly, with a fake under `./testing` for tests.

This repository holds only the guarded skeleton so far: `createGitHubSeam()` returns a seam that holds only its API base URL, `https://api.github.com` unless one is given, and `./testing` holds a fake of it.

## Packages

- `@ai-swfactory-oss/seams-github`: the GitHub REST API seam (SDK).

## Licence

MIT
