## [1.5.3](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.5.2...v1.5.3) (2024-05-31)


### Bug Fixes

* referer is now based on caller host ([2f75386](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/2f75386de3d91aea42345771c006221eff819104))

## [1.5.2](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.5.1...v1.5.2) (2024-05-30)


### Bug Fixes

* expose tokens in refreshCredentials response factory callback ([644b8a2](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/644b8a272cb48e830d21344f12bae9e3082ae1f4))

## [1.5.1](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.5.0...v1.5.1) (2024-05-30)


### Bug Fixes

* reintroduce refreshAuthCookies as refreshNextResponseCookiesWithToken ([620f986](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/620f98682b9002837bfca287d32ea0371f2b2017))

# [1.5.0](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.4.5...v1.5.0) (2024-05-30)


### Bug Fixes

* remove fetch `cache: no-store` due to https://github.com/awinogrodzki/next-firebase-auth-edge/issues/173 ([6fb8143](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/6fb81430b580b586f5a27c5b36624a441aa68e82))


### Features

* added refreshCredentials method that allows to pass modified request headers to NextResponse constructor ([2bf2877](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/2bf2877f5b12456c5e8125d5fa1babfc0074edaf))
* extract referer from Next.js request headers ([bc666fa](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/bc666fa887b81adbf91681faa7d1974417b20988))
* introduced Firebase API Key domain restriction support. Introduced changes to advanced methods and removed APIs deprecated in 1.0 ([67dbb9a](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/67dbb9a2908d62d90fb40a5a154cd2a7d8b14626))


### Performance Improvements

* **refreshCredentials:** slightly improve performance by generating signed tokens only once ([da2fc3e](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/da2fc3e164da0d5015e4d484813cafce2f033ea2))

# [1.5.0-canary.5](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.5.0-canary.4...v1.5.0-canary.5) (2024-05-30)


### Features

* extract referer from Next.js request headers ([bc666fa](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/bc666fa887b81adbf91681faa7d1974417b20988))

# [1.5.0-canary.4](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.5.0-canary.3...v1.5.0-canary.4) (2024-05-27)


### Performance Improvements

* **refreshCredentials:** slightly improve performance by generating signed tokens only once ([da2fc3e](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/da2fc3e164da0d5015e4d484813cafce2f033ea2))

# [1.5.0-canary.3](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.5.0-canary.2...v1.5.0-canary.3) (2024-05-27)


### Features

* added refreshCredentials method that allows to pass modified request headers to NextResponse constructor ([2bf2877](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/2bf2877f5b12456c5e8125d5fa1babfc0074edaf))

# [1.5.0-canary.2](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.5.0-canary.1...v1.5.0-canary.2) (2024-05-26)


### Bug Fixes

* remove fetch `cache: no-store` due to https://github.com/awinogrodzki/next-firebase-auth-edge/issues/173 ([6fb8143](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/6fb81430b580b586f5a27c5b36624a441aa68e82))

# [1.5.0-canary.1](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.4.5...v1.5.0-canary.1) (2024-05-26)


### Features

* introduced Firebase API Key domain restriction support. Introduced changes to advanced methods and removed APIs deprecated in 1.0 ([67dbb9a](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/67dbb9a2908d62d90fb40a5a154cd2a7d8b14626))

## [1.4.5](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.4.4...v1.4.5) (2024-05-26)


### Bug Fixes

* /api/login endpoint now fails with 400: Missing Token error when called without credentials ([2997fc5](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/2997fc51c503400fb9068750374797993f4a61d8))
* exclude lib folder from npmignore file ([f7ef2d5](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/f7ef2d5249d7183f3f1204a34c540e03392943a4))
* fix build cache path in github workflows ([df4c98d](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/df4c98dfe7176029743a04513aa5b67c60a453a3))
* remove .env.dist from npm package ([5c136f9](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/5c136f9e2e7d2f3bc0427f21a91c7ff36a87d0d0))
* remove tests and lint steps from semantic release pipeline ([160662d](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/160662d53077e7cfdd69f194eb1d89e31a7e8d55))
* semantic release npm publish initialization ([3ed6ef5](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/3ed6ef591ced2613d3936aea7dd28140605ca167))
* semantic release package configuration ([ec93cc6](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/ec93cc67ed5a8a2a624cef526de88d7601829aec))
* set correct pkgRoot in semantic releases configuration ([9c36948](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/9c3694839088fee50e1362537cc7ad3e345d7763))

## [1.4.5-canary.7](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.4.5-canary.6...v1.4.5-canary.7) (2024-05-26)


### Bug Fixes

* fix build cache path in github workflows ([df4c98d](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/df4c98dfe7176029743a04513aa5b67c60a453a3))

## [1.4.5-canary.6](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.4.5-canary.5...v1.4.5-canary.6) (2024-05-26)


### Bug Fixes

* exclude lib folder from npmignore file ([f7ef2d5](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/f7ef2d5249d7183f3f1204a34c540e03392943a4))

## [1.4.5-canary.5](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.4.5-canary.4...v1.4.5-canary.5) (2024-05-26)


### Bug Fixes

* remove tests and lint steps from semantic release pipeline ([160662d](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/160662d53077e7cfdd69f194eb1d89e31a7e8d55))

## [1.4.5-canary.4](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.4.5-canary.3...v1.4.5-canary.4) (2024-05-26)


### Bug Fixes

* set correct pkgRoot in semantic releases configuration ([9c36948](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/9c3694839088fee50e1362537cc7ad3e345d7763))

## [1.4.5-canary.2](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.4.5-canary.1...v1.4.5-canary.2) (2024-05-26)


### Bug Fixes

* remove .env.dist from npm package ([5c136f9](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/5c136f9e2e7d2f3bc0427f21a91c7ff36a87d0d0))

## [1.4.5-canary.1](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.4.4...v1.4.5-canary.1) (2024-05-26)


### Bug Fixes

* /api/login endpoint now fails with 400: Missing Token error when called without credentials ([2997fc5](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/2997fc51c503400fb9068750374797993f4a61d8))
* semantic release npm publish initialization ([3ed6ef5](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/3ed6ef591ced2613d3936aea7dd28140605ca167))

## [1.4.4](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.4.3...v1.4.4) (2024-05-26)


### Bug Fixes

* disable default tag behavior in yarn publish ([1661468](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/1661468a501ad759ac55ce66d3eb0c8bab496b13))
* lint ([c703cfb](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/c703cfb9a4c5afc67165366fd1bcaa3651c67a73))
* semantic release publish step authorization ([232f624](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/232f6244e0126b0112cc4a0255780b070049910d))
* semantic release publish step git author ([c917de4](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/c917de4227f432e0aeefdcdc1fd6b38a0d79d7bf))

## [1.4.4-canary.1](https://github.com/awinogrodzki/next-firebase-auth-edge/compare/v1.4.3...v1.4.4-canary.1) (2024-05-26)


### Bug Fixes

* disable default tag behavior in yarn publish ([1661468](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/1661468a501ad759ac55ce66d3eb0c8bab496b13))
* lint ([c703cfb](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/c703cfb9a4c5afc67165366fd1bcaa3651c67a73))
* semantic release publish step authorization ([232f624](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/232f6244e0126b0112cc4a0255780b070049910d))
* semantic release publish step git author ([c917de4](https://github.com/awinogrodzki/next-firebase-auth-edge/commit/c917de4227f432e0aeefdcdc1fd6b38a0d79d7bf))

## 1.4.3

### Patch Changes

- Remove digest from debug logs

## 1.4.2

### Patch Changes

- Fetch Google public keys with cache: "no-store" to fix #159

## 1.4.1

### Patch Changes

- Improve cookieSignatureKeys input validation

## 1.4.0

### Minor Changes

- `handleInvalidToken` is now called with `InvalidTokenReason` as the first argument. It gives developers more inslight and control over authentication flow

## 1.3.0

### Minor Changes

- The library now stores tokens and signature in a single cookie, allowing to run in Firebase Hosting environment
- Use the library without service account in authenticated Google Cloud Run environment
- Added debug mode option

## 1.2.0

### Minor Changes

- Introduced refreshServerCookies method to refresh credentials from inside Server Actions

## 1.1.0

### Minor Changes

- Deprecated refreshAuthCookies methods in favor of refreshNextResponseCookies and refreshApiResponseCookies

## 1.0.1

### Patch Changes

- Update middleware token verification caching doc link

## 1.0.0

### Major Changes

- Reworked APIs

## 0.11.2

### Patch Changes

- Added getUserByEmail method

## 0.11.1

### Patch Changes

- Added Node.js 20 support

## 0.11.0

### Patch Changes

- Added App Check support

## 0.10.2

### Patch Changes

- Stop displaying middleware verification cache warning on prefetched routes

## 0.10.1

### Patch Changes

- Remove internal verification cookie on middleware request instead throwing an error
- Remove internal verification cookie on middleware request instead of throwing an error

## 0.10.0

### Minor Changes

- Next.js 14 support

## 0.9.5

### Patch Changes

- Skip response headers validation on redirect

## 0.9.4

### Patch Changes

- Add list users function support

## 0.9.3

### Patch Changes

- 964c04c: Check if the FIREBASE_AUTH_EMULATOR_HOST has already http:// added to it, otherwise you will get a cryptic fetch failed error.

## 0.9.2

### Patch Changes

- Support tenantId in refreshAuthCookies

## 0.9.1

### Patch Changes

- Return null if user was deleted from Firebase

## 0.9.0

### Minor Changes

- Added middleware token verification caching

## 0.8.8

### Patch Changes

- Add support for specifying tenantId in middleware

## 0.8.7

### Patch Changes

- Convert signature key to UInt8Array directly instead using base64url.decode due to #92

## 0.8.6

### Patch Changes

- Throw user friendly error on no matching kid in public keys response

## 0.8.5

### Patch Changes

- Revalidate token against all public keys if kid is missing

## 0.8.4

### Patch Changes

- Fix https://github.com/awinogrodzki/next-firebase-auth-edge/issues/90 by validating token against all returned public keys in case of not matching kid header

## 0.8.3

### Patch Changes

- Fix no "kid" claim in idToken error when using emulator

## 0.8.2

### Patch Changes

- Added createUser and updateUser methods

## 0.8.1

### Patch Changes

- Remove 'cache: no-store' header from refreshExpiredIdToken

## 0.8.0

### Minor Changes

- Refactor: remove custom JSON Web Token and Signature implementation in favor of jose

## 0.7.7

### Patch Changes

- Fix Node.js 18.17 native WebCrypto ArrayBuffer compatibility issue

## 0.7.6

### Patch Changes

- Import Next.js request cookie interfaces as type

## 0.7.5

### Patch Changes

- Make caches optional due to Vercel Edge middleware error https://github.com/vercel/next.js/issues/50102

## 0.7.4

### Patch Changes

- Set global cache before using ResponseCache

## 0.7.3

### Patch Changes

- Use polyfill only if runtime is defined

## 0.7.2

### Patch Changes

- Fix "body already used" error by cloning response upon rewriting

## 0.7.1

### Patch Changes

- Added @edge-runtime/primitives to dependencies

## 0.7.0

### Minor Changes

- Updated Next.js to 13.4 with stable app directory. Integrated edge-runtime and removed direct dependency to @peculiar/web-crypto. Integrated ServiceAccountCredential and PublicKeySignatureVerifier with Web APIs CacheStorage.

## 0.6.2

### Patch Changes

- Update engines to support Node 19

## 0.6.1

### Patch Changes

- Fix ReadonlyRequestCookies imports after update to Next.js 13.3.0

## 0.6.0

### Minor Changes

- Added setCustomUserClaims, getUser and refreshAuthCookies Edge-runtime compatible methods

## 0.5.1

### Patch Changes

- Handle refresh token error using handleError function
- Updated dependencies
  - next-firebase-auth-edge@0.5.1

## 0.5.0

### Minor Changes

- Rename methods from getAuthenticatedResponse, getUnauthenticatedResponse and getErrorResponse to more readable handleValidToken, handleInvalidToken and handleError functions

## 0.4.4

### Patch Changes

- Added refreshAuthCookies method to refresh cookie headers in api middleware

## 0.4.3

### Patch Changes

- Introduced getUnauthenticatedResponse middleware option to handle redirects for unauthenticated users

## 0.4.2

### Patch Changes

- getAuthenticatedResponse and getErrorResponse options are now async

## 0.4.1

### Patch Changes

- Optional redirectOptions for use-cases where authentication happens in more than one contexts

## 0.4.0

### Minor Changes

- Added authentication middleware to automatically handle redirection and authentication cookie refresh

## 0.3.1

### Patch Changes

- Re-throw INVALID_CREDENTIALS FirebaseAuthError with error details on token refresh error

## 0.3.0

### Minor Changes

- Updated peer next peer dependency to ^13.1.1 and removed allowMiddlewareResponseBody flag'

## 0.2.15

### Patch Changes

- Handle "USER_NOT_FOUND" error during token refresh

## 0.2.14

### Patch Changes

- Added Firebase Authentication Emulator support

## 0.2.13

### Patch Changes

- Fix incorrect HMAC algorithm key buffer size

## 0.2.12

### Patch Changes

- Update rotating credential HMAC key algorithm to SHA-512

## 0.2.11

### Patch Changes

- Update rotating credential HMAC key algorithm to SHA-256

## 0.2.10

### Patch Changes

- Support Next.js 18 LTS

## 0.2.9

### Patch Changes

- Update Next.js peerDependency version to ^13.0.5 to allow future minor/patch versions

## 0.2.8

### Patch Changes

- Integrated with changesets and eslint to improve transparency and legibility
