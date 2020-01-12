import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  var liStyle = {display: "inline-block", marginRight: "30px", fontSize: "18px"}
  return (
    <>
    <Router>
      <div>
      <p style={{display: "inline-block", marginRight: "10px", color: "#663333", fontSize: "30px"}}>Damini Ganesh </p>
        <nav style={{float: "right"}}>
          <ul>
            <li style={liStyle}>
              <Link style={{ textDecoration: 'none', color: "#663333"}} to="/">About</Link>
            </li>
            <li style={liStyle}>
              <Link style={{ textDecoration: 'none', color: "#663333"}} to="/about">Technologies</Link>
            </li>
            <li style={liStyle}>
              <Link style={{ textDecoration: 'none' , color: "#663333"}} to="/users">Contact Me</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <p>hello2</p>
          </Route>
          <Route path="/users">
            <p>hello1</p>
          </Route>
          <Route path="/">
            <p>hello</p>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
    );
}

export default Header;
