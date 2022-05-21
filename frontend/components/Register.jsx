import React, { useState } from "react";
import axios from "axios";

export default function Register() {

    //start add user
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [uName, setuName] = useState("");
    const [Email, setEmail] = useState("");
    const [Pword, setPword] = useState("");
    const [SignAs, setSignAs] = useState("");

    async function sendData(e) {
        e.preventDefault();

        const users = {
            fname,
            lname,
            uName,
            Email,
            Pword,
            SignAs
        }

        const promise = await axios.post("http://localhost:3001/users",users).then((res)=>{
                if (res.status = 201) {
                    console.log(users);
                    //alert('user added successfully');
                    if(confirm("user added successfully.Do u want to Login?")) {
                        window.location.href = "/login"
                    }
                }
            }).catch((err)=>{
                alert(err);
        });

    }
    //end add package
    return (
        <div style={{
            textAlign: "center",
            border: "8px solid #00719F",
            margin: "auto",
            width: "60%",
            padding: "10px",
            marginTop: "200px"
        }}>
            <h2 align={"center"}>Registration</h2>

            <form onSubmit={sendData} action="">
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname" onChange={(e) => {

                    setfname(e.target.value);

                }} /><br/>

                <label htmlFor="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname" onChange={(e) => {

                    setlname(e.target.value);

                }} /><br/>

                <label htmlFor="uName">User name:</label><br/>
                <input type="text" id="uName" name="uName" onChange={(e) => {

                    setuName(e.target.value);

                }} /><br/>

                <label htmlFor="email">Email:</label><br/>
                <input type="email" id="email" name="email" onChange={(e) => {

                    setEmail(e.target.value);

                }} /><br/>

                <label htmlFor="Pword">Password:</label><br/>
                <input type="password" id="Pword" name="Pword" onChange={(e) => {

                    setPword(e.target.value);

                }} /><br/>

                <p>Please select Sign up as(Customer/Trader):</p>
                <input type="radio" id="customer" name="signAs" value="Customer" onChange={(e) => {

                    setSignAs(e.target.value);

                }} required/>
                <label>Customer</label>

                <input type="radio" id="trader" name="signAs" value="Trader" onChange={(e) => {

                    setSignAs(e.target.value);

                }} required/>

                <label>Trader</label><br/>

                <input type="submit" value="Submit" />
            </form>
            <>
                <hr />
            </>



</div>

    )
}
