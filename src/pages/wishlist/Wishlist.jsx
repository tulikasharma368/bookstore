import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import "./wishlist.scss";
import book1 from "../../assets/books/book1.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Userservices from "../../services/Userservice";
let obj = new Userservices();

const Wishlist = () => {
  const [wlarray, setwlarray] = React.useState([]);

  React.useEffect(() => {
    getlist();
    removefromwl();
  }, []);

  const getlist = () => {
    obj
      .Getwishlist()
      .then((response) => {
        console.log(response.data.result);
        setwlarray(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removefromwl = (id) => {
    obj
      .Removefromwl(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const wishlist = wlarray.map((val) => {
    return (
      <div className="bookswl">
        <div className="bookdetswl">
          <div>
            <img src={book1} alt="" />
          </div>
          <div>
            <p className="wlname">{val.product_id.bookName}</p>
            <p className="wlauthor">by {val.product_id.author}</p>
            <p className="wlprice">Rs. {val.product_id.price}</p>
          </div>
        </div>
        <div
          className="deletebuttonwl"
          onClick={() => removefromwl(val.product_id._id)}
        >
          <DeleteOutlineOutlinedIcon />
        </div>
      </div>
    );
  });
  return (
    <div>
      <Header />
      <div className="mainwldiv">
        <div className="homelocationwl">
          <p>
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "#9D9D9D",
                fontSize: "12px",
              }}
            >
              Home /
            </Link>
            <span className="wishlistspan">My wishlist</span>
          </p>
        </div>
        <div className="innerdivwl">
          <div className="headingwl">
            <p>My Wishlist ({wlarray.length})</p>
          </div>

          {wishlist}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
