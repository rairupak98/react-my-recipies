import React, { Component } from 'react';
import Search from '../component/Search';
import RecipiesList from '../component/RecipiesList';
import {recipeData} from "../data/tempList";

class Recipies extends Component {
constructor(props)
{
    super(props)
}
state={
    recipies:recipeData,
    search:''
}
handleChange=(e)=>
{
    this.setState({
        search:e.target.value
    });
}
handleSubmit=(e)=>{
    e.preventdefault()
}

    render() {
        return (
            <>
            <Search search={this.state.search}
             handleChange={this.handleChange}
             handleSubmit={this.handleSubmit}
             />
             
            <RecipiesList recipies={this.state.recipies} />
            </>
            );
    }
}

export default Recipies;