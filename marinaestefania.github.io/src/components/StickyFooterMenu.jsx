import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/stickyFooterMenu.css'


class StickyFooterMenu extends Component{
    render(){
        return(
            <div class="navbarF">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        )
    }
}

export default StickyFooterMenu;