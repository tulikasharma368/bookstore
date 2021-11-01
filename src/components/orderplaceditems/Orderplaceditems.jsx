import React from "react";
import "./orderplaceditems.scss";
import success from "../../assets/success.png";

const Orderplaceditems = () => {
  var email = localStorage.getItem("email");
  var phone = localStorage.getItem("phone");
  var address = localStorage.getItem("address");

  const continueshopping = () => {
    var timer = setTimeout(function () {
      window.location = "/home";
    }, 500);
  };
  return (
    <div className="mainop">
      <div className="innerop">
        <div className="imgdiv">
          <img src={success} alt="" />
        </div>
        <div className="hurraydiv">
          <div>
            Hurray!!! Your order is confirmed the order id is #123456 save the
            order id for further communication..
          </div>
        </div>
        <div className="tablediv">
          <div className="innertablediv">
            <table className="table">
              <tr>
                <th>Email us</th>
                <th>Contact us</th>
                <th>Address</th>
              </tr>
              <tr>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address}</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="buttondiv" onClick={continueshopping}>
          <button>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Orderplaceditems;
