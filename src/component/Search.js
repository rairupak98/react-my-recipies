import React, { Component } from 'react';

class Search extends Component {
    render() {
        const {handleChange,handleSubmit,search}=this.props;
    
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 text-center">
                        <h1 className='text-slanted text-capitalize'>
                            search recipies with{""}
                                     <strong className="text-orange">Food2Fork</strong>
                                </h1>
                                    <form className="mt-4">
                                        <label htmlFor="search" className="text-capitalize">
                                            types recipies separated by comma
                                        </label>
                                        <div className="input-group">
                                            <input type="text"
                                            name="search"
                                            className="form-control  form-control-lg"
                                            placeholder="chicken,onion,carrots"
                                            value={search}
                                            onChange={handleChange}
                                            />
                                            <div className="input-group-append">
                                                <button type="submit"
                                                 className=" input-group-text text-white bg-primary"
                                                 onClick={handleSubmit}
                                                 >
                                                    <i className="fas fa-search"/>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;