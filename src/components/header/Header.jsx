import * as React from "react";
import "./header.scss";
import education from "../../assets/education.svg";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Userservices from "../../services/Userservice";
let obj = new Userservices();

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

export default function Header(props) {
  const [cartarr, setcartarr] = React.useState([]);

  React.useEffect(() => {
    cartitems();
  }, []);

  const cartitems = () => {
    obj
      .GetCart()
      .then((response) => {
        console.log(response.data.result);
        setcartarr(response.data.result);
        if (props.page == "cart") {
          props.items(response.data.result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const opencart = () => {
    var timer = setTimeout(function () {
      window.location = "/cart";
    }, 500);
  };

  const openbooks = () => {
    var timer = setTimeout(function () {
      window.location = "/home";
    }, 500);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <div className="bookstoreicon" onClick={openbooks}>
            <img src={education} alt="" />
            <p>Bookstore</p>
          </div>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div className="shoppingcart">
            <p>Cart</p>
            <Badge
              badgeContent={cartarr.length}
              color="error"
              onClick={opencart}
            >
              <ShoppingCartOutlinedIcon
                color="disabled"
                style={{ cursor: "pointer" }}
              />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
