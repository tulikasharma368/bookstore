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
  const [sort, setsort] = React.useState("Sort By Relevance");
  const [showcartbuttons, setshowcartbuttons] = React.useState(true);

  const booksperpage = 15;
  const pagesVisited = pagenumber * booksperpage;

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Array.prototype.sortBy = function (p) {
  //   return this.slice(0).sort(function (a, b) {
  //     return a[p] > b[p] ? 1 : a[p] < b[p] ? -1 : 0;
  //   });
  // };
  const handlehtl = () => {
    setsort("Price: High to Low");
    let abc = booksdata.sort((a, b) => (a.price < b.price && 1) || -1);
    console.log(abc);
    setbooksdata(abc);
    handleClose();
  };

  const handlelth = () => {
    setsort("Price: Low to High");
    let abc = booksdata.sort((a, b) => (a.price > b.price && 1) || -1);
    console.log(abc);
    setbooksdata(abc);
    handleClose();
  };

  const handlena = () => {
    setsort("Newest Arrivals");
    let abc = booksdata.sort((a, b) =>
      a.bookName > b.bookName ? 1 : b.bookName > a.bookName ? -1 : 0
    );
    // console.log(abc);
    setbooksdata(abc);
    handleClose();
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

  const addtocart = (vals) => {
    obj
      .Addtocart(vals._id)
      .then((response) => {
        console.log(response);
        setshowcartbuttons(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addtowishlist = (vals) => {
    console.log("wish");
    obj
      .Addtowishlist(vals._id)
      .then((response) => {
        console.log(response);
        setshowcartbuttons(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Cartbuttons = (props) => {
    return (
      <div className="bookbuttons">
        {showcartbuttons == true ? (
          <>
            <button className="atb" onClick={() => addtocart(props.value)}>
              Add to bag
            </button>
            <button className="wl" onClick={() => addtowishlist(props.value)}>
              Wishlist
            </button>
          </>
        ) : (
          <button className="wl">Added to bag</button>
        )}
      </div>
    );
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
        {/* <div className="bookbuttons">
          <button className="atb" onClick={() => addtocart(val)}>
            Add to bag
          </button>
          <button className="wl">Wishlist</button>
        </div> */}
        <Cartbuttons value={val} />
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
            <span className="num">({booksdata.length})</span>
          </div>
          <div className="menudiv">
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {sort} <KeyboardArrowDownIcon />
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
              <MenuItem onClick={handlehtl}>Price: High To Low</MenuItem>
              <MenuItem onClick={handlelth}>Price: Low To High</MenuItem>
              <MenuItem onClick={handlena}>Newest Arrivals</MenuItem>
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
              const page = parseInt(query.get("page") || "1", { pageCount });
              return (
                <Pagination
                  //onChangePage={changePage}
                  onClick={(e) => changePage(e)}
                  siblingCount={2}
                  boundaryCount={0}
                  page={page}
                  count={pageCount}
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
