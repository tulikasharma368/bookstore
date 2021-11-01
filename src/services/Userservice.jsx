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

  Clearcart(id) {
    let response = obj.deleteMeth(
      `${baseurl}bookstore_user/remove_cart_item/${id}`,
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

  Addtowishlist(id) {
    let response = obj.postMeth(
      `${baseurl}bookstore_user/add_wish_list/${id}`,
      id,
      headerconfig
    );
    return response;
  }

  Getwishlist() {
    let response = obj.getMeth(
      `${baseurl}bookstore_user/get_wishlist_items`,
      headerconfig
    );
    return response;
  }

  Removefromwl(id) {
    let response = obj.deleteMeth(
      `${baseurl}bookstore_user/remove_wishlist_item/${id}`,
      headerconfig
    );
    return response;
  }

  Addorder(data) {
    let response = obj.postMeth(
      `${baseurl}bookstore_user/add/order`,
      data,
      headerconfig
    );
    return response;
  }
}

export default Userservice;
