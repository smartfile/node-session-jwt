const BitSet = require('bitset');

const RIGHTS = [
  'account_manage',
  'account_manage_any',
  'account_manage_password',
  'access_loophole',
  'rights_loophole',
  'self_manage',
  'site_manage',
  'links_manage',
  'activity_manage',
  'help_manage',
  'automation_manage',
  'notify_manage',
  'reseller_manage',
  'connector_manage',
  'ftp_access',
  'sftp_access',
  'dev_access',
  'app_access',
  'filehub_access',
  'log_access',
  'file_upload_limit',
  'file_upload_exts',
  'default_link_access',
];

function hasRight(name, bitmask) {
  let success = false;

  RIGHTS.forEach((right, index) => {
    if (right === name) {
      success = Boolean(new BitSet(bitmask).get(index));
    }
  });

  return success;
}

function hasRights(rights, bitmask) {
  return rights.every((right) => hasRight(right, bitmask));
}

module.exports = {
  hasRight,
  hasRights,
};
