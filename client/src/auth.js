import axios from "axios";
import cookies from "js-cookie";

// axios.defaults.withCredentials = true;

class Auth {
  constructor() {
    this.authenticated = false;
  }
  isAuthenticated() {
    const accessToken = cookies.get("authSession");

    if (!accessToken) return (this.authenticated = false);

    if (accessToken) return (this.authenticated = true);
  }
}

export default new Auth();
