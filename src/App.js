import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./templates/styles.scss";

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
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
    );
}

export default App;
