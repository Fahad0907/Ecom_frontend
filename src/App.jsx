import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Addproduct from "./components/Addproduct";
import AdminOptions from "./components/AdminOptions";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ProductCategory from "./components/ProductCategory";
import ProductDetails from "./components/ProductDetails";
import Registrations from "./components/Registrations";
import { useStateValue } from "./components/StateProvider";
import UpdateProduct from "./components/UpdateProduct";
import UpdateProductDetails from "./components/UpdateProductDetails";
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
      <Route exact path="/admin/" component = {AdminOptions} />
      <Route exact path="/admin/addproduct/" component = {Addproduct} />
      <Route exact path="/admin/updateproduct/" component = {UpdateProduct} />
      <Route exact path="/admin/updateproduct/:id/" component = {UpdateProductDetails} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
