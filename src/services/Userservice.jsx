import Axiosservice from "./Axiosservice";
const obj = new Axiosservice();
const baseurl = "https://new-bookstore-backend.herokuapp.com/";

class Userservice {
  Signup(data) {
    let response = obj.postMeth(`${baseurl}bookstore_user/registration`, data);
    return response;
  }

  Login(data) {
    let response = obj.postMeth(`${baseurl}bookstore_user/login`, data);
    return response;
  }
}

export default Userservice;
