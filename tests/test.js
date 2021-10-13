const {
  hasFeature,
  hasFeatures,
  hasRight,
  hasRights,
} = require('..');

describe('Session JWT', () => {
  it('succeeds with right', () => {
    expect(hasRight('account_manage', 1)).toBe(true);
  });

  it('succeeds with multiple rights', () => {
    expect(hasRights(['account_manage', 'ftp_access'], 16385)).toBe(true);
  });

  it('denies without right', () => {
    expect(hasRight('ftp_access', 1)).toBe(false);
  });

  it('denies without one of multiple rights', () => {
    expect(hasRights(['account_manage', 'ftp_access'], 1)).toBe(false);
  });

  it('succeeds with feature', () => {
    expect(hasFeature('activity', 4)).toBe(true);
  });

  it('succeeds with multiple features', () => {
    expect(hasFeatures(['activity', 'versioning'], 12)).toBe(true);
  });

  it('denies without right', () => {
    expect(hasFeature('activity', 1)).toBe(false);
  });

  it('denies without one of multiple rights', () => {
    expect(hasFeatures(['activity', 'versioning'], 4)).toBe(false);
  });
});
