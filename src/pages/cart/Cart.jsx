import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/Header";
import Cartitems from "../../components/cartitems/Cartitems";
export const CartContext = React.createContext([]);

const Cart = () => {
  const [cartdata, setcartdataa] = React.useState([]);
  const getcartitems = (val) => {
    setcartdataa(val);
    console.log(val);
  };

  return (
    <div>
      <Header page={"cart"} items={getcartitems} />
      <CartContext.Provider value={cartdata}>
        <Cartitems />
      </CartContext.Provider>

      <Footer />
    </div>
  );
};

export default Cart;
