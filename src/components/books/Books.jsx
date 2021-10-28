import React from "react";
import "./books.scss";
import bookone from "../../assets/books/book1.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Userservices from "../../services/Userservice";
let obj = new Userservices();

const Books = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [booksdata, setbooksdata] = React.useState([]);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    allbooks();
  }, []);
  const allbooks = () => {
    obj
      .Addbooks()
      .then((response) => {
        console.log(response.data.result);
        setbooksdata(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const displaybooks = booksdata.map((val) => (
    <div className="individualbook">
      <div className="bookimg">
        <img src={bookone} alt="" />
      </div>
      <div className="bookcontent">
        <p className="bookname">{val.bookName}</p>
        <p className="bookauthor">by {val.author}</p>
        <p className="bookprice">Rs. {val.price}</p>
      </div>
      <div className="bookbuttons">
        <button className="atb">Add to bag</button>
        <button className="wl">Wishlist</button>
      </div>
    </div>
  ));

  //   console.log(booksdata);

  return (
    <div className="booksmain">
      <div className="innermaindiv">
        <div className="booksnum">
          <div>
            <span className="books">Books</span>
            <span className="num">(128 books)</span>
          </div>
          <div className="menudiv">
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Sort by relevance <KeyboardArrowDownIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Price: High to low</MenuItem>
              <MenuItem onClick={handleClose}>Price: Low to high</MenuItem>
              <MenuItem onClick={handleClose}>Newest arivals</MenuItem>
            </Menu>
          </div>
        </div>
        {/* Books display */}
      </div>
      <div className="booksgrid">
        <div className="allbooks">{displaybooks}</div>
      </div>
    </div>
  );
};

export default Books;
