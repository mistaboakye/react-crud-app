// this is an action creator (a function)
// this will take in a new user
export const addNewUser = (user) => {
  return {
    type: "ADD_USER",
    data: user, //this is the data that will be sent alog with the action
  };
};
