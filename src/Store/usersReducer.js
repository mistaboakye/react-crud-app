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
const userReducer = (state = firstState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        country: this.state.country,
        password: this.state.password,
      };
      return { ...state, users: [...state.users, newUser] };

    default:
      return state;
  }
};
