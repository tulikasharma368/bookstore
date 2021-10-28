import React from "react";
import "./books.scss";
import bookone from "../../assets/books/book1.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Link, MemoryRouter, Route } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Userservices from "../../services/Userservice";
let obj = new Userservices();

const Books = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [booksdata, setbooksdata] = React.useState([]);
  const [pagenumber, setpagenumber] = React.useState(0);

  const booksperpage = 8;
  const pagesVisited = pagenumber * booksperpage;

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

  const displaybooks = booksdata
    .slice(pagesVisited, pagesVisited + booksperpage)
    .map((val) => (
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

  const pageCount = Math.ceil(booksdata.length / booksperpage);
  //   console.log(booksdata);

  const changePage = (e) => {
    setpagenumber(e.target.innerText);
    console.log(e.target.innerText);
    console.log(pagenumber);
  };

  //   const changePage = ({ selected }) => {
  //     setpagenumber(selected);
  //     console.log(pagenumber);
  //   };
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
      {/* pagination: */}
      <div className="pagination">
        <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
          <Route>
            {({ location }) => {
              const query = new URLSearchParams(location.search);
              const page = parseInt(query.get("page") || "1", 10);
              return (
                <Pagination
                  //   onChangePage={changePage}
                  onClick={(e) => changePage(e)}
                  page={page}
                  count={10}
                  renderItem={(item) => (
                    <PaginationItem
                      component={Link}
                      to={`/inbox${
                        item.page === 1 ? "" : `?page=${item.page}`
                      }`}
                      {...item}
                    />
                  )}
                />
              );
            }}
          </Route>
        </MemoryRouter>
      </div>
    </div>
  );
};

export default Books;
