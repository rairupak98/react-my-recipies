import React, {Component} from 'react';
import logo from "../images/logo.svg";
import {Link} from 'react-router-dom';
class Navbar extends Component
{
    render()
    {
        return(
        
            <nav className="navbar navbar-expand-sm 
            navbar-light bg-light">
                <Link  className="navbar-brand" to="/"/>
                    <img src={logo} alt="logo"/>
                     
                        <div className="collapse navbar-collapse show ml-sm-5">
                            <ul className="navbar-nav">
                                <li className="navbar-item ">
                                <Link className="nav-link " to="/" style={{fontWeight:"bolder"}}>
                                    Home
                                    </Link>
                                    </li>
                                <li className="navbar-item text-capitalize text-bold">
                                    <Link className="nav-link" to="/recipies" style={{fontWeight:"bolder"}}>
                                        Recipies
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                
        )
    }
}
export default Navbar;