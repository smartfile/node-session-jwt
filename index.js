const bitset = require('bitset');

// Used a Map to preserve order.
const RIGHTS = new Map([
  ['account_manage', {'description': 'Ability to manage their own users.'}],
  ['account_manage_any', {'description': 'Edit or delete all users. Edit file access for all users. '}],
  ['account_manage_password', {'description': "Allow administrator to set user's password to a known value."}],
  ['access_loophole', {'description': 'Grant file/folder permissions the user does not have. '}],
  ['rights_loophole', {'description': 'Grant a role right the user does not have.'}],
  ['self_manage', {'description': 'Allow user to change their profile information (display name, password, email, timezone, etc.).'}],
  ['site_manage', {'description': 'Access to site administration and billing (Settings -> Admin Settings).'}],
  ['links_manage', {'description': 'Create public links to files or directories.'}],
  ['activity_manage', {'description': 'Access the activity section.'}],
  ['help_manage', {'description': 'Edit articles related to help.'}],
  ['automation_manage', {'description': 'Access the notification section.'}],
  ['notify_manage', {'description': 'Access the old notify section.'}],
  ['reseller_manage', {'description': 'Access to the reseller control panel.'}],
  ['connector_manage', {'description': 'Access to the connection control panel (Admin Settings -> Connections).'}],
  ['ftp_access', {'description': 'Transfer files via unencrypted FTP.'}],
  ['sftp_access', {'description': 'Transfer files via encrypted FTP or SFTP.'}],
  ['dev_access', {'description': 'Access to development functionality.'}],
  ['app_access', {'description': 'Access the application menu.'}],
  ['filehub_access', {'description': 'Map cloud drive (Dropbox).'}],
  ['log_access', {'description': 'Access to application/system logs section.'}],
  ['file_upload_limit', {'description': 'Number of uploads per login session.'}],
  ['file_upload_exts', {'description': 'Type of extensions to upload. (Ex: .pdf, .doc, .docx)'}],
  ['default_link_access', {'description': 'Set a default when configuring advanced settings for an external link.'}],
]);

function hasRight(name, bitmask) {

}

function hasRights(rights, bitmask) {

}

export {
  hasRight,
  hasRights,
};
