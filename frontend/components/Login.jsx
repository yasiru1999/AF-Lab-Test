import React, { useEffect , useState } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

export default function Login() {

    const history = useHistory();
    const [login,setLogin] = useState([]);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    useEffect(() => {
            axios.get("http://localhost:3001/users").then(res => {
                console.log(res);
                setLogin(res.data);
            }).catch((err) => {
                alert(err.message);
            })


    },[]);

    function checkData(e) {
        e.preventDefault();
        const user = {
            email,
            password
        }

        let i = 0, l = login.length;

        for (; i< l ; i++) {
            let users = login[i];
            if ((user.email === users.Email) && (user.password === users.Pword)) {
                if (users.SignAs === "Customer"){
                    history.push('/customerHome');
                }
                else if(users.SignAs === "Trader") {
                    history.push('/traderHome');
                }
                else {
                    alert("Not found")
                }
            }
        }

    }

    return (
        <div style={{textAlign: "center", border: "8px solid #00719F", margin: "auto", width: "60%", padding: "10px", marginTop: "200px"
        }}>
            <h2 align={"center"}>Login</h2>

            <form onSubmit={checkData}>
                <label htmlFor="email">Email:</label><br/>
                <input type="email" id="email" name="email" onChange={(e) => {
                    setEmail(e.target.value)}}
                /><br/>

                <label htmlFor="password">Password:</label><br/>
                <input type="password" id="password" name="password" onChange={(e) => {setPassword(e.target.value)}} /><br/>
                <button type="submit" id={"check"} >Sign in</button>

            </form>
        </div>

    )
}
