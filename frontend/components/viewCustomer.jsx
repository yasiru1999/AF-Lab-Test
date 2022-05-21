import React, {useEffect, useState} from "react";
import axios from "axios";
import "../css/trader.css";

export default function ViewCustomer() {



    const [Customers, setCustomers] = useState("");
    useEffect(() => {
        function getCustomerDetails() {
            axios.get("http://localhost:3001/users").then((res) => {
                console.log(res);
                const customers = res.data.filter((cst) => {
                    return cst.SignAs === "Customer";
                })
                setCustomers(customers);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getCustomerDetails();
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
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Customers && Customers.map(post => (
                                <tr>
                                    <td>{post.fname}</td>
                                    <td>{post.lname}</td>
                                    <td>{post.uName}</td>
                                    <td>{post.Email}</td>
                                    <td>{post.SignAs}</td>
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