const firstState = {
  users: [
    {
      name: "Mista Boakye",
      email: "mistaboakye@gmail.com",
      country: "Ghana",
      password: "**************",
      id: "kvsdjghbeirdht327489",
    },
  ],
};
//the reducer is a function that takes in a state
//and an action

//set up your reducer
const usersReducer = (state = firstState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        name: action.data.name,
        email: action.data.email,
        country: action.data.country,
        password: action.data.password,
        id: action.data.id,
      };
      return { ...state, users: [...state.users, newUser] };

    case "DELETE_USER":
      const filteredUsers = state.users.filter(
        (user) => user.id !== action.data
      );
      return { ...state, users: filteredUsers };
    case "UPDATE_USER": //We will loop through the data using map()
      //to find if edited user matches what we want using the id
      const updatedUser = state.users.map((user) => {
        if (user.id === action.data) {
          return { ...user, ...action.updatedUser };
        } else {
          return user;
        }
      });
      return { ...state, users: updatedUser };
    default:
      return state;
  }
};

export default usersReducer;
