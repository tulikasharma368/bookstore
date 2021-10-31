import Axiosservice from "./Axiosservice";
const obj = new Axiosservice();
const baseurl = "https://new-bookstore-backend.herokuapp.com/";
const token = localStorage.getItem("token");
const headerconfig = {
  headers: {
    "x-access-token": token,
  },
};

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

  Addtocart(id) {
    let response = obj.postMeth(
      `${baseurl}bookstore_user/add_cart_item/${id}`,
      id,
      headerconfig
    );
    return response;
  }

  GetCart() {
    let response = obj.getMeth(
      `${baseurl}bookstore_user/get_cart_items`,
      headerconfig
    );
    return response;
  }

  Putuserdetails(data) {
    let response = obj.putMeth(
      `${baseurl}bookstore_user/edit_user`,
      data,
      headerconfig
    );
    return response;
  }
}

export default Userservice;
