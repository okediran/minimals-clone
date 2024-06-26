interface UserState { // Ensure this is exported
    username: string;
    password: string;
    isLoggedIn :boolean
  }

export { UserState };