// this is an action creator (a function)
// this will take in a new user
export const addNewUser = (user) => {
  return {
    type: "ADD_USER",
    /*this "data" can be named anything*/
    data: user, //this is the data that will
    //be sent along with the action
  };
};
export const deleteUser = (userId) => {
  return {
    type: "DELETE_USER",
    data: userId, //this is the data that will be sent alog with the action
  };
};
export const updateUser = (userId, updatedUser) => {
  return {
    type: "UPDATE_USER",
    data: userId,
    updatedUser: updatedUser, //this is the data that will be sent alog with the action
  };
};
