import React from "react";
import axios from "axios";
import { connect } from "react-redux"
import { getUser } from "./../../ducks/users";
import Header from "../Header/Header.js"
import "./Profile.css"
import profileIMG from "./../../images/default_profile_image.png"

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            gender: "",
            hair_color: "",
            eye_color: "",
            hobby: "",
            birthday_day: "",
            birthday_month: "",
            birthday_year: ""
        }
    }

    componentDidMount() {
        this.props.getUser();
    }

    changeHandler(key, e) {
        this.setState({
            [key]: e.target.value
        })
        console.log(this.state)
    }

    onClickHandler() {
        axios.post('/update',{
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            gender: this.state.gender,
            hair_color: this.state.hair_color,
            eye_color: this.state.eye_color,
            hobby: this.state.hobby,
            birthday_day: this.state.birthday_day,
            birthday_month: this.state.birthday_month,
            birthday_year: this.state.birthday_year
        })
        console.log("Success")
    }

    render() {
        const user = this.props.user;
        return (
            <div className=''>
                <Header />
                <div className="profile_snapshot">
                    <img className="image" src={profileIMG} />
                    <div className="userInfo">
                        <span className="firstName">{user ? user.first_name : null}</span>
                        <span className="lastName">{user ? user.last_name : null}</span>
                    </div>
                </div>
                <div>
                    <button type='' onclick={() => this.onClickHandler()} className=''>Update</button>
                    <button type='' className=''>Cancel</button>
                </div>
                <div className="profileEditor">
                    <div>
                        <p>First Name</p>
                        <input type='text' onChange={(e) => this.changeHandler("first_name", e)} className='' />
                        <p>Last Name</p>
                        <input type='text' onChange={(e) => this.changeHandler("last_name", e)} className='' />
                        <p>Gender</p>
                        <select className="gender">
                            <option disabled value selected="selected">-- Select --</option>
                            <option value=''>Male</option>
                            <option value=''>Female</option>
                        </select>
                        <p>Hair Color</p>
                        <select className="hair_color">
                            <option disabled value selected="selected">-- Select --</option>
                            <option value=''>Brown</option>
                            <option value=''>Blue</option>
                            <option value=''>Green</option>
                            <option value=''>Red</option>
                            <option value=''>Blonde</option>
                            <option value=''>White</option>
                        </select>
                        <p>Eye Color</p>
                        <select className="eye_color">
                            <option disabled value selected="selected">-- Select --</option>
                            <option value=''>Brown</option>
                            <option value=''>Blue</option>
                            <option value=''>Green</option>
                        </select>
                    </div>
                    <div>
                        <p>Hobby</p>
                        <select className="hobby">
                            <option disabled value selected="selected">-- Select --</option>
                            <option value=''>Video Games</option>
                            <option value=''>Hiking</option>
                            <option value=''>Fishing</option>
                            <option value=''>Rafting</option>
                        </select>
                        <p>Birthday Day</p>
                        <select className="birthday_day">
                            <option disabled value selected="selected">-- Select --</option>
                        </select>
                        <p>Birthday Month</p>
                        <select className="birthday_month">
                            <option disabled value selected="selected">-- Select --</option>
                        </select>
                        <p>Birthday Year</p>
                        <select className="birthday_year">
                            <option disabled value selected="selected">-- Select --</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUser })(Profile)

// export default Profile;