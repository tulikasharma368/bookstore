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

  Addbooks() {
    let response = obj.getMeth(`${baseurl}bookstore_user/get/book`);
    return response;
  }
}

export default Userservice;
