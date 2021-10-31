import React from "react";
import "./cartitems.scss";
import book1 from "../../assets/books/book1.png";
import TextField from "@mui/material/TextField";
import { CartContext } from "../../pages/cart/Cart";

const Cartitems = () => {
  const cart = React.useContext(CartContext);
  const [countervalue, setcountervalue] = React.useState(0);
  const [orderbutton, setorderbutton] = React.useState(true);
  const [continuebutton, setcontinuebutton] = React.useState(true);
  const [custdetails, setcustdetails] = React.useState(false);
  const [ordersummary, setordersummary] = React.useState(false);
  const [cartarr, setcartarr] = React.useState(["a"]);

  // setcartarr(cart);
  const placeorder = () => {
    setorderbutton(false);
    setcustdetails(true);
  };

  const continueorder = () => {
    setcontinuebutton(false);
    setordersummary(true);
  };

  const minus = () => {
    if (countervalue != 0) {
      setcountervalue(countervalue - 1);
    }
  };
  const plus = () => {
    setcountervalue(countervalue + 1);
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
            PLACE ORDER
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
                  <TextField id="tf" label="Name" variant="outlined" />
                  <TextField id="tf" label="Phone Number" variant="outlined" />
                </div>
                <div className="detsfields">
                  <TextField id="tf" label="Pincode" variant="outlined" />
                  <TextField id="tf" label="Locality" variant="outlined" />
                </div>
                <div className="addressfield">
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    multiline
                    rows={2}
                    fullWidth
                  />
                </div>
                <div className="detsfields">
                  <TextField id="tf" label="city/town" variant="outlined" />
                  <TextField id="tf" label="Landmark" variant="outlined" />
                </div>
              </div>
              <div>
                <p>Type</p>
                <div>
                  <form className="radiobuttons">
                    <label>
                      <input type="radio" checked="unchecked" name="radio" />
                      <span>Home</span>
                    </label>
                    <label>
                      <input type="radio" checked="checked" name="radio" />
                      <span>Work</span>
                    </label>
                    <label>
                      <input type="radio" checked="unchecked" name="radio" />
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
              {/* <div className="book">
                <div>
                  <img src={book1} alt="" />
                </div>
                <div className="bookcon">
                  <p className="namebook">Book name</p>
                  <p className="authbook">author</p>
                  <p className="pricebook">price</p>
                </div>
              </div> */}
              {cartItems}
              <div className="btnactive">
                <button className="placeorder" onClick={continueorder}>
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  console.log(cart);

  const cartItems = cart.map((val) => (
    <div className="book">
      <div>
        <img src={book1} alt="" />
      </div>
      <div className="bookcon">
        <p className="namebook">{val.product_id.description}</p>
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
          <p>Remove</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="allcartitems">
        <div className="extra">
          <div className="mycart">
            <p>My Cart(2)</p>
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
