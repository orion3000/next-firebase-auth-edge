import {parseTokens, signTokens} from './sign';

describe('signTokens', () => {
  it('should sign provided id and refresh tokens into single string', async () => {
    const value = await signTokens(
      {
        idToken: 'example_id_token',
        refreshToken: 'example_refresh_token'
      },
      ['secret']
    );

    expect(value).toEqual(
      'eyJ0b2tlbnMiOnsiaWRUb2tlbiI6ImV4YW1wbGVfaWRfdG9rZW4iLCJyZWZyZXNoVG9rZW4iOiJleGFtcGxlX3JlZnJlc2hfdG9rZW4ifSwic2lnbmF0dXJlIjoiMVFxWmF0eWdZOUE5cURlTks0Y0wwbm8zcU16N0FVRDhtWExYcFQ5NDc0cyJ9'
    );
  });
});

describe('parseTokens', () => {
  it('should parse and verify provided string into id and refresh tokens', async () => {
    const value = await parseTokens(
      'eyJ0b2tlbnMiOnsiaWRUb2tlbiI6ImV4YW1wbGVfaWRfdG9rZW4iLCJyZWZyZXNoVG9rZW4iOiJleGFtcGxlX3JlZnJlc2hfdG9rZW4ifSwic2lnbmF0dXJlIjoiMVFxWmF0eWdZOUE5cURlTks0Y0wwbm8zcU16N0FVRDhtWExYcFQ5NDc0cyJ9',
      ['secret']
    );

    expect(value).toEqual({
      idToken: 'example_id_token',
      refreshToken: 'example_refresh_token'
    });
  });

  it('should return null if signature is invalid', async () => {
    const value = await parseTokens(
      'eyJ0b2tlbnMiOnsiaWRUb2tlbiI6ImV4YW1wbGVfaWRfdG9rZW4iLCJyZWZyZXNoVG9rZW4iOiJleGFtcGxlX3JlZnJlc2hfdG9rZW4ifSwic2lnbmF0dXJlIjoiMVFxWmF0eWdZOUE5cURlTks0Y0wwbm8zcU16N0FVRDhtWExYcFQ5NDc0cyJ9',
      ['foobar']
    );

    expect(value).toEqual(null);
  });
});
