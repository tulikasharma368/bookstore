import React from "react";
import "./cartitems.scss";
import book1 from "../../assets/books/book1.png";
import TextField from "@mui/material/TextField";
import { CartContext } from "../../pages/cart/Cart";
import Userservices from "../../services/Userservice";
let obj = new Userservices();

const Cartitems = () => {
  const cart = React.useContext(CartContext);
  const [countervalue, setcountervalue] = React.useState(0);
  const [orderbutton, setorderbutton] = React.useState(true);
  const [continuebutton, setcontinuebutton] = React.useState(true);
  const [custdetails, setcustdetails] = React.useState(false);
  const [ordersummary, setordersummary] = React.useState(false);
  const [details, setDetails] = React.useState({
    name: "",
    phonenumber: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    locality: "",
  });
  console.log(cart);
  const placeorder = () => {
    setorderbutton(false);
    setcustdetails(true);
  };

  const continueorder = () => {
    localStorage.setItem("phone", details.phonenumber);
    localStorage.setItem(
      "address",
      details.address + " " + details.locality,
      +" " + details.pin
    );
    let userdets = {
      addressType: "Home",
      fullAddress: `${details.address},${details.locality},${details.pin}`,
      city: details.city,
      state: details.state,
    };
    console.log(userdets);
    obj
      .Putuserdetails(userdets)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setcontinuebutton(false);
    setordersummary(true);
  };

  const checkout = () => {
    let orderdetails = [];

    cart.map((val) => {
      orderdetails.push({
        product_id: val.product_id._id,
        product_name: val.product_id.bookName,
        product_quantity: val.quantityToBuy,
        product_price: val.product_id.price,
      });
    });

    obj
      .Addorder(orderdetails)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    cart.map((val) => {
      removecart(val._id);
      console.log(val._id);
    });

    var timer = setTimeout(function () {
      window.location = "/orderplaced";
    }, 500);
  };

  const removecart = (id) => {
    obj
      .Clearcart(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const minus = () => {
    if (countervalue != 0) {
      setcountervalue(countervalue - 1);
    }
  };
  const plus = () => {
    setcountervalue(countervalue + 1);
  };

  const userinput = (e) => {
    // console.log(e);

    // setDetails({ ...details, [e.target.name]: e.target.value });
    setDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const Placeorderbutton = () => {
    if (orderbutton == true) {
      return (
        <div className="btnactive">
          <button className="placeorder" onClick={placeorder}>
            PLACE ORDER
          </button>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const Continuebutton = () => {
    if (continuebutton == true) {
      return (
        <div className="btnactive">
          <button className="placeorder" onClick={continueorder}>
            CONTINUE
          </button>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const Customerdetails = () => {
    if (custdetails == false) {
      return (
        <div className="outercustdets">
          <div className="innercustdets">
            <div className="custdets1">Customer Details</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="outercustdets">
          <div className="innercustdets">
            <div className="custdets1">
              <p style={{ margin: "0%", fontWeight: "600", fontSize: "20px" }}>
                Customer Details
              </p>
              <div className="detsform">
                <div className="detsfields">
                  <TextField
                    id="tf"
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={details.name}
                    onChange={(e) => userinput(e)}
                  />
                  <TextField
                    id="tf"
                    label="Phone Number"
                    variant="outlined"
                    name="phonenumber"
                    value={details.phonenumber}
                    onChange={(e) => userinput(e)}
                  />
                </div>

                <div className="detsfields">
                  <TextField
                    id="tf"
                    label="Pincode"
                    variant="outlined"
                    name="pin"
                    value={details.pin}
                    onChange={(e) => userinput(e)}
                  />
                  <TextField
                    id="tf"
                    label="Locality"
                    variant="outlined"
                    name="locality"
                    value={details.locality}
                    onChange={(e) => userinput(e)}
                  />
                </div>

                <div className="addressfield">
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    multiline
                    rows={2}
                    fullWidth
                    name="address"
                    value={details.address}
                    onChange={(e) => userinput(e)}
                  />
                </div>
                <div className="detsfields">
                  <TextField
                    id="tf"
                    label="city/town"
                    variant="outlined"
                    name="city"
                    value={details.city}
                    onChange={(e) => userinput(e)}
                  />
                  <TextField
                    id="tf"
                    label="state"
                    variant="outlined"
                    name="state"
                    value={details.state}
                    onChange={(e) => userinput(e)}
                  />
                </div>
              </div>
              <div>
                <p>Type</p>
                <div>
                  <form className="radiobuttons">
                    <label>
                      <input type="radio" name="radio" />
                      <span>Home</span>
                    </label>
                    <label>
                      <input type="radio" name="radio" />
                      <span>Work</span>
                    </label>
                    <label>
                      <input type="radio" name="radio" />
                      <span>Other</span>
                    </label>
                  </form>
                </div>
              </div>
              <Continuebutton />
            </div>
          </div>
        </div>
      );
    }
  };

  const Ordersummary = () => {
    if (ordersummary == false) {
      return (
        <div className="outercustdets">
          <div className="innercustdets">
            <div className="custdets1">Order Summary</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="outercustdets">
          <div className="innercustdets">
            <div
              className="custdets1"
              style={{ margin: "0%", fontWeight: "600", fontSize: "20px" }}
            >
              <p>Order Summary</p>
              {cartItems}
              <div className="btnactive" onClick={checkout}>
                <button className="placeorder">CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const cartItems = cart.map((val) => (
    <div className="book">
      <div>
        <img src={book1} alt="" />
      </div>
      <div className="bookcon">
        <p className="namebook">{val.product_id.bookName}</p>
        <p className="authbook">by {val.product_id.author}</p>
        <p className="pricebook">Rs {val.product_id.price}</p>
        <div className="counterextra">
          <div className="counter">
            <div className="minus" onClick={minus}>
              -
            </div>
            <div className="countval">{countervalue}</div>
            <div className="plus" onClick={plus}>
              +
            </div>
          </div>
          <p onClick={() => removecart(val._id)}>Remove</p>
        </div>
      </div>
    </div>
  ));
  console.log(details);
  return (
    <div>
      <div className="allcartitems">
        <div className="extra">
          <div className="mycart">
            <p>My Cart({cart.length})</p>
            {cartItems}
            <Placeorderbutton />
          </div>
        </div>
      </div>

      <Customerdetails />
      <Ordersummary />
    </div>
  );
};

export default Cartitems;
