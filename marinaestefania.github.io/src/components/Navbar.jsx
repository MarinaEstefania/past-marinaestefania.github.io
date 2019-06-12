import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/navbar.css'


class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
  <a href="#home">Home</a>
  <a href="#news">About</a>
  <a href="#contact">Work</a>
  <a href="#contact">Contact</a>
</div>
        )
    }
}

export default Navbar;