import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './Navigation.css';

class Navigation extends Component {

  state = {
    logClass: "nav-link active",
    viewClass: "nav-link"
  }

  linkClassHandler = (event) => {
    if(event.target.dataset.id === "view"){
      this.setState({logClass:"nav-link", viewClass: "nav-link active"})
    }
    if(event.target.dataset.id === "log") {
      this.setState({logClass:"nav-link active", viewClass: "nav-link"})
    }
  }

  render() {
    const {logClass, viewClass} = this.state;
    return(
        <nav className="card-header">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link className={logClass}
                to="/"
                onClick={this.linkClassHandler}
                data-id="log">Log Inv.
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={viewClass}
                to="/view"
                onClick={this.linkClassHandler}
                data-id="view">View Inv.
              </Link>
            </li>
          </ul>
        </nav>

    )
  }
}

export default Navigation;
