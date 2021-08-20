import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ProductCategory from "./components/ProductCategory";
import ProductDetails from "./components/ProductDetails";
import Registrations from "./components/Registrations";
import UserProfile from "./components/UserProfile";



function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path = "/" component = {Home}/>
      <Route exact path = "/showproduct/:id/" component = {ProductCategory}/>
      <Route exact path = "/productdetails/:id/"  component = {ProductDetails}/>
      <Route exact path="/login/" component={Login}/>
      <Route exact path="/registration/" component={Registrations}/>
      <Route exact path="/cart/" component={Cart}/>
      <Route exact path="/myprofile/" component ={UserProfile}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
