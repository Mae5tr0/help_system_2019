import { post } from "./utils";

export default {
  signIn(email, password) {
    post("/auth/signin", {
      email,
      password
    });
  },

  signUp(email, password) {
    post("auth/signup", {
      email,
      password
    });
  }
};
