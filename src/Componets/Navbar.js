import React from 'react';
import logo from '../logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">

            <a className="navbar-brand" href="/"> <img className='logo' src={logo} alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto"   tabindex="1" id="row0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item try-focus">
                        <a className="nav-link" href="/">about me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"> services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"> portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">  my work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"> contact us</a>
                    </li>

                </ul>

            </div>

            </div>
        </nav>
    );
};

export default Navbar;