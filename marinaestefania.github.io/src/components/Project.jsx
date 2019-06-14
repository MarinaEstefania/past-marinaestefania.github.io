import React, { Component } from 'react';
import '../style/project.css';
import aboutImage from '../img/about.jpg'

class Project extends Component {
    render() {
        return (
            <section>
                <div>
                    <a name="contact"><h4>Project</h4></a>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                            <img src={aboutImage} alt="Cinque Terre" width="600" height="400"/>
                        </a>
                            <div className="desc">Add a description of the image here</div>
  </div>
                    </div>


                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" href="img_forest.jpg">
                                <img src={aboutImage}  alt="Forest" width="600" height="400"/>
    </a>
                                <div className="desc">Add a description of the image here</div>
  </div>
                        </div>

                        <div className="responsive">
                            <div className="gallery">
                                <a target="_blank" href="img_lights.jpg">
                                    <img src={aboutImage}  alt="Northern Lights" width="600" height="400"/>
    </a>
                                    <div className="desc">Add a description of the image here</div>
  </div>
                            </div>

                            <div className="responsive">
                                <div className="gallery">
                                    <a target="_blank" href="img_mountains.jpg">
                                        <img src={aboutImage}  alt="Mountains" width="600" height="400"/>
    </a>
                                        <div className="desc">Add a description of the image here</div>
  </div>
                                </div>

                                <div className="clearfix"></div>

            </section>

                            )
                        }
                    }
                    
export default Project;