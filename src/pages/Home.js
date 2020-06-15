import React, { Component } from 'react';
import Header from '../component/Header';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            
            <Header title="amezing recipies">
            <Link to="recipies" className="text-uppercase btn btn-secondary btn-lg mt-3">
                search recipies
            </Link>
            </Header>
            
    
        );
    }
}

export default Home;