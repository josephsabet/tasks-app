// const { default: axios } = require("axios");

import axios from "axios";

class User {
  constructor(name, email, password, passwordConfirmation, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.passwordConfirmation = passwordConfirmation;
  }
  async signIn() {
    //
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQ1Rv_lI85HcQgEU8D7Au5d6BX1tctW5Y
        `,
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error.response);
      return null;
    }
  }
  signOut() {
    //
  }

  async register() {
    //
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQ1Rv_lI85HcQgEU8D7Au5d6BX1tctW5Y
    `,
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        }
      );
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
export default User;
