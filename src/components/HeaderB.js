import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png'
import user from '../assets/images/user.png'
import messageIcon from '../assets/images/email.png'
import { FaSearch } from "react-icons/fa";

export const HeaderB = ()=>{
    const navigate = useNavigate()
    const handleSearch = async(event)=>{
        event.preventDefault()
        const searchVehicle = event.target.elements["name"].value;
        navigate(`/vehicles?name=${searchVehicle}`, {replace: true})
    }
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top my-2">
                <div className="container my-2">
                    <Link className="navbar-brand" to="/"><img className="img-fluid" alt="logo" width="40" height="40" src={logo} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/vehicle-list">Vehicle Type</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/history">History</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About</Link>
                            </li>
                            <li>
                                <form onSubmit={handleSearch} className="header-form" id="search">
                                    <div class="searching-form position-relative">
                                        <input type="text" name="name" placeholder="Search vehicle"></input>
                                        <button className="search-icon position-absolute">
                                            <FaSearch/>
                                        </button>
                                    </div>
                                </form>
                            </li>
                            <li className="profile-message text-center d-flex justify-content-center">
                                <Link to="/">
                                    <div className="message-notif position-relative">
                                        <img src={messageIcon} alt="message icon" width="40"/>
                                        <div className="iconSum position-absolute top-0 start-100 translate-middle">1</div>
                                    </div>
                                </Link>
                                <Link to="/profile" role="button"><img className="avatar ms-5" src={user} alt="user" width="40" height="40"/></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
        )
}

export default HeaderB