import Axios from "axios";

// Next we make an 'instance' of it
const instance = Axios.create({
  // .. where we make our configurations
  baseURL: "http://localhost:3001",
});

instance.defaults.headers.post["Content-Type"] = "application/json";

// Also add/ configure interceptors && all the other cool stuff
export default instance;
