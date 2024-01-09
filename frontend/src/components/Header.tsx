// import React from 'react'
import "../styles/Header.css";

export const Header = () => {
    return (
        <div className="header">
            <div className="header-name">
                <h1>Habbit</h1>
            </div>
            <div className="header-nav">
                <div className="header-nav_about">
                    <h2>About</h2>
                </div>
                <div className="header-nav_signup">
                    <h2>Sign Up</h2>
                </div>
                <div className="header-nav_login">
                    <h2>Login</h2>
                </div>
            </div>
        </div>
    );
};
