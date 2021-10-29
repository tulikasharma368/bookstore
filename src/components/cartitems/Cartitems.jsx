import React from "react";
import "./cartitems.scss";
import book1 from "../../assets/books/book1.png";

const Cartitems = () => {
  const [countervalue, setcountervalue] = React.useState(0);
  const [orderbutton, setorderbutton] = React.useState(true);
  const [custdetails, setcustdetails] = React.useState(false);
  const [ordersummary, setordersummary] = React.useState(false);

  const placeorder = () => {
    setorderbutton(false);
    setcustdetails(true);
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

  const Customerdetails = () => {
    if (ordersummary == false) {
      return (
        <div className="outercustdets">
          <div className="innercustdets">
            <div className="custdets1">Customer Details</div>
          </div>
        </div>
      );
    } else {
      return <div className="custdets">content2</div>;
    }
  };

  const Ordersummary = () => {
    if (custdetails == false) {
      return (
        <div className="outercustdets">
          <div className="innercustdets">
            <div className="custdets1">Order Summary</div>
          </div>
        </div>
      );
    } else {
      return <div className="custdets">content2</div>;
    }
  };

  const minus = () => {
    if (countervalue != 0) {
      setcountervalue(countervalue - 1);
    }
  };
  const plus = () => {
    setcountervalue(countervalue + 1);
  };
  return (
    <div>
      <div className="allcartitems">
        <div className="extra">
          <div className="mycart">
            <p>My Cart(2)</p>
            <div className="book">
              <div>
                <img src={book1} alt="" />
              </div>
              <div className="bookcon">
                <p className="namebook">Book name</p>
                <p className="authbook">author</p>
                <p className="pricebook">price</p>
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
