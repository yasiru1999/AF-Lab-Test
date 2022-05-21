import React, {useEffect, useState} from "react";
import axios from "axios";
import "../css/trader.css";

export default function ViewInventory() {

    const [Items, setItems] = useState("");

    useEffect(() => {
        function getItemDetails() {
            axios.get("http://localhost:3001/items").then((res) => {
                console.log(res);
                setItems(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getItemDetails();
    }, []);

    const ItemsDetails = Items;

    return(
        <div>
            <div className="sidebar">
                <a href="/addItem">Add Item</a>
                <a href="/viewInventory">View Inventory</a>
                <a href="/viewCustomer">View Customer</a>
                <a href="/addPromo">Add Promotions</a>
                <a href="/viewPromo">View Promotions</a>
            </div>

            <div className="content">
                <div style={{textAlign: "center", border: "8px solid #00719F", margin: "auto", width: "60%", padding: "10px", marginTop: "200px"}}>
                    <table>
                        <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Items && Items.map(post => (
                                <tr>
                                    <td>{post.ProductName}</td>
                                    <td>{post.ProductType}</td>
                                    <td>{post.Price}</td>
                                    <td>{post.Qty}</td>
                                    <td><a href={`/editItem/${post.id}`}>Edit</a></td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}