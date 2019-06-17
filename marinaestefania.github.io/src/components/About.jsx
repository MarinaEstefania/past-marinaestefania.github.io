import React, { Component } from 'react';
import '../style/about.css';
import aboutImage from '../img/about.jpg'

class About extends Component {
    render() {
        return (
            <div>
                <p className="my-div-pre-title-about">SOMETHING</p>
                <p className="my-div-title-about">ABOUT ME</p>
                <div class="row my-row my-description-about">

                    <div class="col-sm-12 col-md-8 my-col">
                        <p >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                    </div>
                    <div class="col-sm-12 col-md-4 my-col my-flex">
                        {/* <img src={aboutImage}/> */}
                        <div>
                        <ul>
                            <li> React</li>
                            <li>Javascript</li>
                            <li>HTML 5</li>
                            <li>CSS 3 </li>
                            <li>Firebase</li>
                            <li>Git</li>
                            <li>English</li>
                            <li>softskills</li>
                        </ul>
                        </div>
                         <div>
                        <ul>
                            <li> React</li>
                            <li>Javascript</li>
                            <li>HTML 5</li>
                            <li>CSS 3 </li>
                            <li>Firebase</li>
                            <li>Git</li>
                            <li>English</li>
                            <li>softskills</li>
                        </ul>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

export default About;