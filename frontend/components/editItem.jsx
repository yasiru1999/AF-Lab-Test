import React, { Component } from "react";
import axios from "axios";
import "../css/trader.css";

export default class EditItem extends Component{

    constructor(props) {
        super(props);

        this.state = {
            ProductName: "",
            ProductType: "",
            Price: "",
            Qty:""
        };
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const  {ProductName,ProductType,Price,Qty} = this.state;

        const data = {
            ProductName:ProductName,
            ProductType:ProductType,
            Price:Price,
            Qty:Qty

        }
        console.log(data);

        axios.put(`http://localhost:3001/items/${id}`,data).then((res) => {
                alert("Item updated Successfully");
            this.setState(
                {
                    ProductName:"",
                    ProductType:"",
                    Price:"",
                    Qty:""
                }
            )
        })
    }

    render() {
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
                    <div style={{textAlign: "center", border: "8px solid #00719F", margin: "auto", width: "60%", padding: "10px", marginTop: "200px"}}>
                        <h2 align={"center"}>Update items</h2>

                        <form action="">
                            <label htmlFor="productName">Product Name:</label><br/>
                            <input type="text"
                                   id="productName"
                                   name="ProductName"
                                   onChange={this.handleInputChange}
                            /><br/>

                            <label htmlFor="productType">Product Type:</label><br/>
                            <input type="text"
                                   id="productType"
                                   name="ProductType"
                                   onChange={this.handleInputChange}
                            /><br/>

                            <label htmlFor="price">Price:</label><br/>
                            <input type="text"
                                   id="price"
                                   name="Price"
                                   onChange={this.handleInputChange}
                            /><br/>

                            <label htmlFor="Qty">Qty:</label><br/>
                            <input type="text"
                                   id="Qty"
                                   name="Qty"
                                   onChange={this.handleInputChange}
                            /><br/>
                            <button type="submit" onClick={this.onSubmit}>Update</button>
                        </form>
                        <>
                            <hr />
                        </>
                    </div>
                </div>
            </div>
        )
    }


}