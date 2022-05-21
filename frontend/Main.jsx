import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import TraderHome from './components/traderMain'
import AddItem from "./components/addItem";
import ViewInventory from './components/viewInventory';
import EditItem from './components/editItem';
import AddPromotions from "./components/addPromotions";
import ViewPromotions from "./components/viewPromotions";
import ViewCustomer from "./components/viewCustomer";

import CustomerHome from "./components/CustomerMain"
import ViewItems from "./components/viewItems";
import ViewCart from "./components/viewCart";
import ViewWishList from "./components/viewWishList"

function Main() {
    return (
        <Router>
            <div className="Main">

                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />

                <Route path="/traderHome" exact component={TraderHome} />
                <Route path="/addItem" exact component={AddItem} />
                <Route path="/viewInventory" exact component={ViewInventory} />
                <Route path="/editItem/:id" exact component={EditItem} />
                <Route path="/addPromo" exact component={AddPromotions} />
                <Route path="/viewPromo" exact component={ViewPromotions} />
                <Route path="/viewCustomer" exact component={ViewCustomer} />


                <Route path="/customerHome" exact component={CustomerHome} />
                <Route path="/viewItems" exact component={ViewItems} />
                <Route path="/viewCart" exact component={ViewCart} />
                <Route path="/viewWishList" exact component={ViewWishList} />
            </div>
        </Router>
    );
}

export default Main;
