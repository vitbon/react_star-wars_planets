import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, NavLink } from "react-router-dom";
import { Redirect } from "react-router";

export default class PlanetShort extends Component {
  return (
    <Router basename={"/hw19_react_navigation/"}>
      <div>
        <nav className="navigator">
          <span>
            <NavLink className="nav_button" to={"/"}>Main</NavLink>
          </span>
          <span>
            <NavLink className="nav_button" to={"/post"}>Post</NavLink>
          </span>
          <span>
            <NavLink className="nav_button" to={"/photo"}>Photo</NavLink>
          </span>
          <span>
            <NavLink className="nav_button" to={"/contact"}>Contact</NavLink>
          </span>
        </nav>

        <Switch>
          <Route exact path={"/"}>
            <Main />
          </Route>
          <Route exact path={"/post"}>
            <Post />
          </Route>
          <Route exact path={"/photo"}>
            <Photo />
          </Route>
          <Route exact path={"/contact"}>
            <Contacts />
          </Route>
          <Route exact path={"/contact/:id"}
                 component={ViewContact}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}