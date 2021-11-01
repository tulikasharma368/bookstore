import './App.css';
import {BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom";
import Loginsignup from './pages/loginsignup/Loginsignup';
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart';
import Orderplaced from './pages/orderplaced/Orderplaced';
import Wishlist from './pages/wishlist/Wishlist';

function App() {
  return (
    <div >
      {/* <Home/> */}
     <Router >
      <Switch>
        <Route exact path="/" component={Loginsignup} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/orderplaced" component={Orderplaced} />
        <Route exact path="/wishlist" component={Wishlist} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
