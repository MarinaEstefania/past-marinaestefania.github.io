import React, { Component } from 'react';
import '../style/project.css';
import imagetry from '../img/screen (13).jpg'
import imagetry2 from '../img/screen.jpg'
import imagetry3 from '../img/about.jpg'

class Project extends Component {
    render() {
        return (
            <section className="my-project-row">
                <div>
                    <a name="projects"><h4>Recent Projects</h4></a>
                </div>
                <div class="my-grid-row"> 

                    <div class="my-grid-column">
                        <img src={imagetry2}/>
                        <img src={imagetry}/>
                    </div>

                    <div class="my-grid-column">
                        <img src={imagetry}/>
                        <img src={imagetry2}/>
                    </div> 

                    <div class="my-grid-column">
                        <img src={imagetry3}/>
                        <img src={imagetry2}/>
                    </div> 

                    <div class="my-grid-column">
                        <img src={imagetry3}/>
                        <img src={imagetry2}/>
                    </div>

                </div>
            </section>

                            )
                        }
                    }
                    
export default Project;