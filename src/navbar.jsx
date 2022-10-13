import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="http://localhost:3000/"><i className="fa-solid fa-jedi"></i></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse justify-content-end w-25" id="navbarSupportedContent">

                    <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        favs
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end rounded-0 mt-0">
                        <li><Link className="dropdown-item" href="/">Action</Link></li>
                        <li><Link className="dropdown-item" href="/">Another action</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" href="/">Something else here</Link></li>
                    </ul>

                </div>
            </div>
        </nav>
    )
};

export default Navbar;