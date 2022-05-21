import React, {Component} from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
                <div style={{textAlign:"center",border:"8px solid #00719F",margin:"auto",width:"60%",padding:"10px",marginTop:"200px"}}>
                    <h2>E-Shopping Center</h2>


                            <a href="/register">
                                <span style={{color:"white",backgroundColor:"green",padding:"15px 32px",textAlign:"center"
                                ,display:"inline-block",fontSize:"16px",margin: "4px 2px",cursor:"pointer"}}>Register<br/></span></a>


                            <a href="/login">
                                <span style={{color:"white",backgroundColor:"blue",padding:"15px 32px",textAlign:"center"
                                    ,display:"inline-block",margin: "4px 2px",fontSize:"16px",cursor:"pointer"}}>Login<br/></span></a>

                </div>
        </div>;
    }
}