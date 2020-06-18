import React, { Component } from 'react';
import {recipeData} from "../data/tempDetails";
import {Link} from 'react-router-dom';

class SingleRecipies extends Component {
  constructor(props)
      {
        super(props);
        const id=this.props.match.params.id;
        this.state={
          recipe:recipeData,
          id,
          loading:false
        }
      }
      
    render() {
      const{
        image_url,
        publisher,
        publisher_url,
        source_url,
        title,
        ingredients
      }=this.state.recipe;

        if  (this.state.loading)
        {
          return (<div className="container">
              <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <h2 className="text-uppercase text-orange text-center">
                  Loading recipie...
                </h2>
              </div>
              </div>
            </div>
          );
        }
        return(
          <div className="container my-5">
            <div className="row">
              <div className="col-10 mx-auto col-md-6 mt-3">
                <Link to="/recipies" className="btn btn-warning mb-5 text-capitalize ">
                  Back to recipe list
                </Link>
                <img src={image_url}
                 className="d-block w-100"
                style={{maxHeight:"30rem"}}
                alt="recipe"/>
              </div>
                {/* info */}
              <div className="col-10 mx-auto col-md-6 mt-3">
        <h6 className="text-uppercase">{title}</h6>
        <h6 className="text-warning text-capitalize text-slanted">
          Provide by { publisher}
        </h6>
           <a href={publisher_url} target="_blank" 
           rel="noopener noreferrer" 
           className="btn btn-success
            mt-2 text-capitilize" >
              Recipe Url </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {ingredients.map((item,index)=>
                {
                  return(<li key={index} className="list-group-item text-slanted" >
                    {item}
                  </li>)
                })}
                </ul>    
                </div>
              
            </div>
          </div> 
        )
      }
}

export default SingleRecipies;