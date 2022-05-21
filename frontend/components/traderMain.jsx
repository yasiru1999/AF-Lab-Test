import React  from "react";
import "../css/trader.css";

export default function TraderMain() {

    return (
        <div>
            <div className="sidebar">
                <a href="/addItem">Add Item</a>
                <a href="/viewInventory">View Inventory</a>
                <a href="/viewCustomer">View Customer</a>
                <a href="/addPromo">Add Promotions</a>
                <a href="/viewPromo">View Promotions</a>
            </div>

            <div className="content">
                <h2>Trader DashBoard</h2>

            </div>
        </div>

    )
}
