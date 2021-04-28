import React, { Component } from "react";
import Home from "./Home";
import Formations from "./Formations";
import Pedagogie from "./Pedagogie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Header extends Component {
  render() {
    
    return (
      <Router>
      <div className="container top"> 
      <header id="home">
        <nav className="navigation" id="nav-wrap">
        
        <picture className="logo"> 
           <source srcset="http://localhost:3000/images/logo.webp" type="image/webp"/>
           <img src="logo.png" alt="logo"/>
          </picture>
          <a className="smoothscroll2" > 
           
           Le réseau des Instituts des Hautes Etudes 


          </a>
          <hr></hr>
          <ul id="nav" className="nav">
          
                <br></br>
            <li>
              <a className="smoothscroll"> 
                <Link to="/">Accueil</Link>
              </a>
            </li>
            <li>
              <a className="smoothscroll"> 
              <Link to="/formations"> Nos formations</Link> 

              </a>
            </li>
            <li>
              <a className="smoothscroll">
              <Link to="/pedagogies">Pédagogies</Link>
              </a>
            </li>
          </ul>
          <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/formations">
          <Formations  />
          </Route>
          <Route path="/pedagogies">
          <Pedagogie  />
          </Route>
        </Switch> 
        </nav>
        

      </header>
      </div>
      </Router>
    );
  }
}

export default Header;
