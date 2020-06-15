import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Recipies from "./pages/Recipies";
import SingleRecipies from "./pages/SingleRecipies";
import Default from "./pages/Default";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
<Router>
   <Navbar /> 
  <Switch>
  <Route path="/" exact component={Home}/>
   <Route path="/recipies" exact component={Recipies}/> 
  <Route path="/recipies/:id" component={SingleRecipies}/>
  <Route component={Default}/>
   </Switch>
</Router>

</>
  );
}

export default App;
