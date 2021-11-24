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
        <div id='nav-links'>
          <Link to={'/home'}>Home</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div id='nav-links'>
          <Link to={'/login'}>LOGIN</Link>
          <Link to={'/signup'}>SINGUP</Link>
        </div>
      );
    }
  }
  
  render() {
    return (
      <div id='navbar'>
        <div id='nav-icon'>
          <img src="" alt="" />
        </div>
        { this.getLinks() }
      </div>
    );
  }
}

export default NavBar;
