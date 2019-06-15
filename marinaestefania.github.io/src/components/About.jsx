import React, {Component} from 'react';
import '../style/about.css';
import aboutImage from '../img/about.jpg'

class About extends Component{
    render(){
        return(
            <div >
              <div class="row my-row ">
              <div class="col-sm-12 col-md-8 my-col">
                <a name="about"><h4>About Me</h4></a>
                 <p className="my-about-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p> 
                </div>
                <div class="col-sm-12 col-md-4 my-col my-flex">
                {/* <img src={aboutImage}/> */}
                </div>
               
              </div>

 

          </div>
        )
    }
}

export default About;