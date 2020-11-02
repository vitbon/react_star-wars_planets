import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Planets from "../Planets/Planets";
import Modal from "../Modal/Modal";
import "./main.css";

export default class Main extends Component {
  render() {
    const page = [1, 2, 3, 4, 5, 6];

    return (
      <Router basename={"/react_star-wars_planets/"}>
        <div>
          <nav className="navigator">
            <span>
              { page.map(item => 
                  <NavLink className="nav_button" 
                            key={item}
                            to={`/page${item}`} > 
                    Page {`${item}`}
                  </NavLink>
              )}
            </span>
          </nav>
          
          <Switch>
            { page.map(item =>
                <Route exact path={`/page${item}`} key={item}>
                  <Planets page={item} key={item}/>
                </Route>
            )}
            { page.map(item =>
                <Route path={`/page${item}/modal`} 
                       key={`modal${item}`}
                       render={ props => <Modal {...props} /> } >
                </Route>
            )}
            <Route exact path={"/"}>
              <Planets page="1" key="1" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}