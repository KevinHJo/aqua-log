import React from 'react';
import { Link } from 'react-router-dom';
// import './navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={'/home'}>Home</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/login'}>Login</Link>
          <Link to={'/signup'}>Signup</Link>
        </div>
      );
    }
  }
  
  render() {
    return (
      <div>
        <h1>navbar</h1>
        <h1>{this.props.loggedIn}</h1>
        { this.getLinks() }
      </div>
    );
  }
}

export default NavBar;
