const firstState = {
  state: [
    {
      name: "Mista Boakye",
      email: "mistaboakye@gmail.com",
      country: "Ghana",
      password: "**************",
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
      };
      return { ...state, users: [...state.users, newUser] };

    default:
      return state;
  }
};

export default usersReducer;
