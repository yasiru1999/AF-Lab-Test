import React  from "react";
import "../css/trader.css";

export default function CustomerMain() {

    return (
        <div>
            <div className="sidebar">
                <a href="/viewItems">View Items</a>
                <a href="/viewCart">Cart</a>
                <a href="/viewWishList">WishList</a>
            </div>

            <div className="content">
                <h2>Customer DashBoard</h2>

            </div>
        </div>

    )
}
