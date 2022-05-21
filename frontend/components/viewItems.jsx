import React, {useEffect, useState} from "react";
import axios from "axios";
import "../css/trader.css";

export default function ViewItems() {

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

    const saveCartItem = async (post) => {
        const promise = await axios.post("http://localhost:3001/carts",post).then((res)=>{
            if (res.status = 201) {
                console.log(post);
                //alert('item added successfully');
            }
        }).catch((err)=>{
            alert(err);
        });
    }

    const saveWishListItem = async (post) => {
        const promise = await axios.post("http://localhost:3001/wishlist",post).then((res)=>{
            if (res.status = 201) {
                console.log(post);
                //alert('item added successfully');
            }
        }).catch((err)=>{
            alert(err);
        });
    }


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
                            <th>Cart</th>
                            <th>WishList</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Items && Items.map(post => (
                                <tr>
                                    <td>{post.ProductName}</td>
                                    <td>{post.ProductType}</td>
                                    <td>{post.Price}</td>
                                    <td><button onClick={()=> saveCartItem(post)}>Add to Cart</button></td>
                                    <td><button onClick={()=> saveWishListItem(post)}>Add to WishList</button></td>
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