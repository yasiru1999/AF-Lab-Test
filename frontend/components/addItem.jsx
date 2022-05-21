import React, { useState } from "react";
import axios from "axios";
import "../css/trader.css";

export default function AddItem() {

    const [ProductName, setproductName] = useState("");
    const [ProductType, setproductType] = useState("");
    const [Price, setprice] = useState("");
    const [Qty, setQty] = useState("");

    async function sendData(e) {
        e.preventDefault();

        const items = {
            ProductName,
            ProductType,
            Price,
            Qty
        }

        const promise = await axios.post("http://localhost:3001/items",items).then((res)=>{
            if (res.status = 201) {
                console.log(items);
                alert('item added successfully');
            }
        }).catch((err)=>{
            alert(err);
        });
    }

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
                    <h2 align={"center"}>Add items</h2>

                    <form onSubmit={sendData} action="">
                        <label htmlFor="productName">Product Name:</label><br/>
                        <input type="text" id="productName" name="productName" onChange={(e) => {

                            setproductName(e.target.value);

                        }} /><br/>

                        <label htmlFor="productType">Product Type:</label><br/>
                        <input type="text" id="productType" name="productType" onChange={(e) => {

                            setproductType(e.target.value);

                        }} /><br/>

                        <label htmlFor="price">Price:</label><br/>
                        <input type="text" id="price" name="price" onChange={(e) => {

                            setprice(e.target.value);

                        }} /><br/>

                        <label htmlFor="Qty">Quantity:</label><br/>
                        <input type="text" id="Qty" name="Qty" onChange={(e) => {

                            setQty(e.target.value);

                        }} /><br/>
                        <input type="submit" value="Submit" />
                    </form>
                    <>
                        <hr />
                    </>
                </div>
            </div>
        </div>
    )
}