import React, { Component } from 'react';
import '../style/project.css';
import imagetry from '../img/screen (13).jpg'

class Project extends Component {
    render() {
        return (
            <section className="my-project-row">
                <div>
                    <a name="projects"><h4>Recent Projects</h4></a>
                </div>
                <div class="grid">
                <figure class="effect-duke">
						<img src={imagetry} alt="img27"/>
						<figcaption>
							<h2>Poke <span>goal</span></h2>
							<p>Mediante lal usuario puede tomar decisiones sobre como desea avanzar en el juego, ya sea completando misiones, evolucionando a sus pokemon o atrapando a uno en específico, por mencionar algunos ejemplos.
                                <div className="div-icon-redes-projects">
                                    <a className="icon-redes-projects" target="_blank" href="https://www.myGITHUB.com/"><i class="fab fa-github fa-2x"></i></a>
                                    <a className="icon-redes-projects" target="_blank" href="https://www.myPROYECTO.com/"><i class="fas fa-link fa-2x"></i></a>  
                                </div>
                            </p>
						</figcaption>			
					</figure>
                    <figure class="effect-duke">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/27.jpg" alt="img27"/>
						<figcaption>
							<h2>Poke <span>goal</span></h2>
							<p>Mediante lal uionar algunos ejemplos.
                                <div className="div-icon-redes-projects">
                                <a className="icon-redes-projects" target="_blank" href="https://www.myPROYECTO.com/"><i class="fas fa-info fa-2x" ></i> </a>  
                                    <a className="icon-redes-projects" target="_blank" href="https://www.myGITHUB.com/"><i class="fab fa-github fa-2x "></i></a>
                                    <a className="icon-redes-projects" target="_blank" href="https://www.myPROYECTO.com/"><i class="fas fa-link fa-2x"></i></a>  
                                </div>
                            </p>
						</figcaption>			
					</figure>
					
				</div>

            </section>

                            )
                        }
                    }
                    
export default Project;