import React from 'react';

const Toolbar = () => (
    <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper">
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <div className="nav-title">Home</div>
            <ul className="right">
                <li><a href="#"><i className="material-icons">notifications</i></a></li>
                <li><a href="#"><i className="material-icons">settings</i></a></li>
            </ul>
            </div>
        </nav>
    </div>
)

export default Toolbar;