import React from "react";
import { NavLink, useNavigate  } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    PNC SPA
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/mission-vision">Mission & Vision</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/gallery">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/contact">Contact</NavLink>
                        </li>


                        {/* PROTECTED ROUTES ACCESS */}
                        {isAuthenticated && (
                        <li className="nav-item">
                            <NavLink 
                            className={({ isActive }) => 
                                isActive ? "nav-link active" : "nav-link"
                            } 
                            to="/dashboard"
                            >
                            Dashboard
                            </NavLink>
                        </li>
                        )}
                    </ul>
                    
                    {/* AUTHENTICATION SECTION */}
                    <ul className="navbar-nav">
                        {isAuthenticated ? (
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            Welcome, {user.name}
                            </a>
                            <ul className="dropdown-menu">
                            <li>
                                <span className="dropdown-item-text">
                                <small>Logged in as: {user.role}</small>
                                </span>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <button className="dropdown-item" onClick={handleLogout}>
                                Logout
                                </button>
                            </li>
                            </ul>
                        </li>
                        ) : (
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                            Login
                            </NavLink>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;