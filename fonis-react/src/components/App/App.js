import { BrowserRouter, Switch, Route } from "react-router-dom";
import Products from "../Products/Products";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import Details from "../Details/Details";
import NotFound from "../NotFound/NotFound";
import Layout from "../Layout/Layout";
import "../../styles/reset.css";
import "../../styles/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/category/:category" exact component={Products} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/details/:id" exact component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
