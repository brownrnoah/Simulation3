import React from "react";
import {connect} from "react-redux"
import {getUser} from "./../../ducks/users";
import Header from "../Header/Header.js"
import profileIMG from "./../../images/default_profile_image.png"
import "./Private.css"

class Private extends React.Component{

    componentDidMount(){
        this.props.getUser();
    }

    render() {
        const user = this.props.user;
        return (
            <div className=''>
                <Header/>
                <div className="profile_snapshot">
                    <img className="image" src={profileIMG}/>
                    <div className="userInfo">
                        <span className="firstName">{ user ? user.first_name : null }</span>
                        <span className="lastName">{ user ? user.last_name : null }</span>
                        <a href='http://localhost:3000/#/profile/'>
                <button type='' className='edit'>Edit Profile</button></a>      
                    </div> 
                </div> 
            </div> 
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser})(Private)