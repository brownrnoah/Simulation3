import React, { Component } from 'react';
// import logo from '';
import './Login.css';
export default class Login extends Component {
    render() {
        return (
            <div className='App'>  
                {/* <img src={logo} alt=""/> */}
                <h1>HELO</h1>
                <a href={ process.env.REACT_APP_LOGIN }>
                    <button>Login/Register</button>
                </a>
            </div> 
        )
    }
}