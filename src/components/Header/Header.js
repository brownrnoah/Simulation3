import "./Header.css"
import React from "react";


export default function Header() {
    return(
    <div className="header">
        <div className="nav">
            <p>Helo</p>
            <div><img alt="Home" src="" /></div>
            <div><img alt="Search" src="" /></div>
        </div>
        <div>DashBoard</div>
        <div><a href='http://localhost:3005/auth/logout'>Log out</a></div>
    </div>)
}
