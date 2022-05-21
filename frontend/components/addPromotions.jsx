import React, { useState } from "react";
import axios from "axios";
import "../css/trader.css";

export default function AddPromotions() {

    const [ProductID, setproductID] = useState("");
    const [ProductName, setproductName] = useState("");
    const [PromoPrecentage, setPromoPrecentage] = useState("");
    const [DiscountPrice, setDiscountPrice] = useState("");
    const [ExpiredDate, setExpiredDate] = useState("");

    async function sendData(e) {
        e.preventDefault();

        const promos = {
            ProductID,
            ProductName,
            PromoPrecentage,
            DiscountPrice,
            ExpiredDate
        }
        const promise = await axios.post("http://localhost:3001/promo",promos).then((res)=>{
            if (res.status = 201) {
                console.log(promos);
                alert('promotion added successfully');
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
                    <h2 align={"center"}>Add Promotions</h2>

                    <form onSubmit={sendData} action="">
                        <label htmlFor="ProductID">Product ID:</label><br/>
                        <input type="text" id="ProductID" name="ProductID" onChange={(e) => {

                            setproductID(e.target.value);

                        }} /><br/>

                        <label htmlFor="ProductName">Product Name:</label><br/>
                        <input type="text" id="ProductName" name="ProductName" onChange={(e) => {

                            setproductName(e.target.value);

                        }} /><br/>

                        <label htmlFor="price">Promo Precentage:</label><br/>
                        <input type="text" id="PromoPrecentage" name="PromoPrecentage" onChange={(e) => {

                            setPromoPrecentage(e.target.value);

                        }} /><br/>

                        <label htmlFor="DiscountPrice">Discount Price:</label><br/>
                        <input type="text" id="DiscountPrice" name="DiscountPrice" onChange={(e) => {

                            setDiscountPrice(e.target.value);

                        }} /><br/>

                        <label htmlFor="ExpiredDate">Expired Date:</label><br/>
                        <input type="text" id="ExpiredDate" name="ExpiredDate" onChange={(e) => {

                            setExpiredDate(e.target.value);

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