import React, {useEffect, useState} from "react";
import axios from "axios";
import "../css/trader.css";

export default function ViewPromotions() {

    const [Promotions, setPromotions] = useState("");

    useEffect(() => {
        function getPromoDetails() {
            axios.get("http://localhost:3001/promo").then((res) => {
                console.log(res);
                setPromotions(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPromoDetails();
    }, []);

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
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Promo Precentage</th>
                            <th>Discount Price</th>
                            <th>Expired Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Promotions && Promotions.map(post => (
                                <tr>
                                    <td>{post.ProductID}</td>
                                    <td>{post.ProductName}</td>
                                    <td>{post.PromoPrecentage}</td>
                                    <td>{post.DiscountPrice}</td>
                                    <td>{post.ExpiredDate}</td>
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