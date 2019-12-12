  
import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from 'prop-types';

function Navbar(props) {

  function clickLogout() {
    props.onLogout();
  }

  let signInOut = <Link to='/login'>Sign In</Link>;

  if (props.currentUser)
  {
    signInOut = <Link onClick={clickLogout} to='/login'>Sign Out</Link>;
  }

  var navStyle = {
    backgroundColor: '#0f2c3e',
  };
  var marginLeftStyle = {
    marginLeft: '25px'
  };
  var marginRightStyle = {
    marginRight: '20px'
  };

  return (
    <nav style={navStyle}>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo' style={marginLeftStyle}><i className='material-icons'>home</i>My Journals</Link>
        <ul id='nav-mobile' className='right hide-on-small-and-down'>
          <li><Link to='/create'>New Journal</Link></li>
          <li style={marginRightStyle}>{signInOut}</li>
          <li><Link to='/create-account'>Create Account</Link></li>

        </ul>
      </div>
    </nav>  
  );
}

Navbar.propTypes = {
  onLogout: PropTypes.func,
  currentUser: PropTypes.number
};

export default Navbar;