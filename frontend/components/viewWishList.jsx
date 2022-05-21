import React, {useEffect, useState} from "react";
import axios from "axios";
import "../css/trader.css";

export default function ViewWishList() {

    const [WishList, setWishList] = useState("");

    useEffect(() => {
        function getItemDetails() {
            axios.get("http://localhost:3001/wishlist").then((res) => {
                console.log(res);
                setWishList(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getItemDetails();
    }, []);

    return(
        <div>
            <div className="sidebar">
                <a href="/viewItems">View Items</a>
                <a href="/viewCart">Cart</a>
                <a href="/viewWishList">WishList</a>
            </div>

            <div className="content">
                <div style={{textAlign: "center", border: "8px solid #00719F", margin: "auto", width: "60%", padding: "10px", marginTop: "200px"}}>
                    <table>
                        <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            WishList && WishList.map(post => (
                                <tr>
                                    <td>{post.ProductName}</td>
                                    <td>{post.ProductType}</td>
                                    <td>{post.Price}</td>
                                    <td></td>
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