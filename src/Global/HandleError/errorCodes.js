export const ErrorCodes = {
  users_400_1: {
    status: 400,
    title: 'Wrong password',
    detail: 'The password that you entered is not correct.',
  },

  users_400_2: {
    status: 400,
    title: 'Invalid id token',
    detail: '`id_token` you shared is not valid or expired.',
  },

  users_400_3: {
    status: 400,
    title: 'Social already exists',
    detail: 'User with this account already exists.',
  },

  users_400_4: {
    status: 400,
    title: 'Email already exists',
    detail: 'User with this email already exists.',
  },

  users_400_5: {
    status: 400,
    title: 'Phone number already exists',
    detail: 'User with this phone number already exists.',
  },

  users_400_6: {
    status: 400,
    title: 'Not in deactivated state.',
    detail: "Can't activate a user in state other than 'Deactivated'.",
  },

  users_400_7: {
    status: 400,
    title: 'Not in activated state.',
    detail: "Can't deactivate a user in state other than 'Activated'.",
  },

  users_400_8: {
    status: 400,
    title: 'Action denied on admin.',
    detail: 'This action cannot be performed on a user with role admin.',
  },

  users_400_9: {
    status: 400,
    title: 'No user found.',
    detail: 'You do not have an account, register first!',
  },

  users_400_10: {
    status: 400,
    title: 'User already verified.',
    detail: 'The user is already verified.',
  },

  users_400_11: {
    status: 400,
    title: 'Invalid or expired token.',
    detail: 'Token is invalid or expired.',
  },

  users_400_12: {
    status: 400,
    title: 'No OTP found.',
    detail: 'No OTP available for this user. Please request OTP and try again.',
  },

  users_400_13: {
    status: 400,
    title: 'Incorrect or expired OTP.',
    detail: 'The OTP has expired. Please request OTP again.',
  },

  users_400_14: {
    status: 400,
    title: 'Incorrect OTP.',
    detail: 'The OTP is incorrect. Please try again with the correct OTP.',
  },

  users_400_15: {
    status: 400,
    title: 'Unsupported contact.',
    detail: 'The contact type is not supported. It can be either E or P.',
  },

  users_400_16: {
    status: 400,
    title: 'Wait for cooldown.',
    detail: 'Please wait for sometime before making this request again.',
  },

  users_400_17: {
    status: 400,
    title: 'Logout failed',
    detail: 'Logout failed , please try again.',
  },

  users_400_18: {
    status: 400,
    title: 'role not defined',
    detail: 'role invalid or not defined',
  },

  users_400_19: {
    status: 400,
    title: 'no email or phone number given',
    detail: 'no email or phone number were given.',
  },

  users_400_20: {
    status: 400,
    title: 'Phone number not valid',
    detail: 'Given phone number is not valid. Please check format and length.',
  },

  users_400_21: {
    status: 400,
    title: 'User with this phone number already registered',
    detail: 'User with this phone number already registered',
  },

  users_403_1: {
    status: 403,
    title: 'Student cannot update name',
    detail: 'You can only update you name once.',
  },

  users_403_2: {
    status: 403,
    title: 'Account deactivated',
    detail: 'Your account is deactivated. Please contact support.',
  },

  batch_400_1: {
    status: 400,
    title: 'Batch not specified.',
    detail: 'Batch id not found in the request.',
  },

  batch_400_2: {
    status: 400,
    title: 'Request already present.',
    detail: 'Request for the user for this batch is already present.',
  },

  batch_400_3: {
    status: 400,
    title: 'Lecture is still active.',
    detail: 'There can be only one active lecture for a batch at a time.',
  },

  batch_400_4: {
    status: 400,
    title: 'No active lecture found.',
    detail: 'No lecture is active for the batch.',
  },

  batch_400_5: {
    status: 400,
    title: 'Archived Batch',
    detail: 'The batch you are trying to access has been archived',
  },

  batch_400_6: {
    status: 400,
    title: 'Poll expired.',
    detail: 'Polls have a time limit, you cannot answer once it has passed.',
  },

  batch_400_7: {
    status: 400,
    title: 'Failed to delete prerecorded lecture from aws',
    detail:
      'Failed to delete prerecorded lecture from aws. Either file does not exist or server busy.',
  },

  batch_400_8: {
    status: 400,
    title: 'Status not present or invalid',
    detail:
      'Requested status is not present or invalid. Please check and try again.',
  },

  batch_400_9: {
    status: 400,
    title: 'Given batch is invalid',
    detail:
      'Given batch id does not match with requested batch id. Check batch id entered and try again.',
  },

  batch_400_10: {
    status: 400,
    title: 'Folder id invalid',
    detail: 'Given folder id is not a valid uuid.',
  },

  batch_400_11: {
    status: 400,
    title: 'Filename is invalid',
    detail: 'Given filename is invalid.',
  },

  batch_400_12: {
    status: 400,
    title: 'Invalid storage path',
    detail: 'Given storage path is not valid.',
  },

  batch_403_1: {
    status: 403,
    title: 'Failed to delete prerecording folder',
    detail: 'Folder cannot be deleted, delete all files inside it and retry.',
  },

  batch_403_2: {
    status: 403,
    title: 'Cannot update schedule',
    detail: 'Schedule cannot be updated. Check for multiple same timings',
  },

  batch_404_1: {
    status: 404,
    title: 'Batch does not exists',
    detail: 'Batch with given id does not exists.',
  },

  batch_404_2: {
    status: 404,
    title: 'Batch join request not exists',
    detail: 'Join request for given batch id does not exist for the user.',
  },

  batch_404_3: {
    status: 404,
    title: 'Prerecorded lecture does not exist.',
    detail: 'Given prerecorded lecture does not exist.',
  },

  batch_404_4: {
    status: 404,
    title: 'Prerecorded lecture folder does not exist.',
    detail: 'Given prerecorded lecture folder does not exist.',
  },

  batch_500_1: {
    status: 500,
    title: 'Multiple scheduled lecture on same day.',
    detail:
      'There cannot be multiple scheduled lecture on same day. Contact support.',
  },
  no_active_account: {
    status: 401,
    title: 'No account found!',
    detail: 'No account found with the given credentials.',
  },
}
