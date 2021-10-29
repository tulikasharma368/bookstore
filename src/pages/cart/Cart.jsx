import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/Header";
import Cartitems from "../../components/cartitems/Cartitems";

const Cart = () => {
  // const a = "f";
  // const Ac = () => {
  //   if (a == "f") {
  //     return <Footer />;
  //   }
  // };
  return (
    <div>
      <Header />
      {/* <Ac /> */}
      <Cartitems />
      <Footer />
    </div>
  );
};

export default Cart;
