import viewer from './queries/viewer';
import currentUser from './queries/users/currentUser';

import signIn from './mutations/signIn';
// import signOut from './mutations/signOut';
// import signUp from './mutations/signUp';

export const queriesHelper = {
  viewer,
  currentUser
};

export const mutationsHelper = {
  signIn
  // signOut,
  // signUp
};
