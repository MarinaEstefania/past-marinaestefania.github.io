import React, { Component } from 'react';
import '../style/project.css';
import aboutImage from '../img/about.jpg'

class Project extends Component {
    render() {
        return (
            <section className="my-project-row">
                <div>
                    <a name="projects"><h4>Project</h4></a>
                </div>
                <div class="grid">
					<figure class="effect-julia">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/21.jpg" alt="img21"/>
						<figcaption>
							<h2>Poke <span>Goal</span></h2>
							<div>
								<p>PokeGoal es una Web App dirigida a jugadores de Pokemon GO interesados en mejorar su nivel competitivo.

Mediante la información que arroja la interfaz, el usuario puede tomar decisiones sobre como desea avanzar en el juego, ya sea completando misiones, evolucionando a sus pokemon o atrapando a uno en específico, por mencionar algunos ejemplos.</p>
								<p>She loves the smell of the ocean</p>
								<p>And dives into the morning light</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure class="effect-julia">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/22.jpg" alt="img22"/>
						<figcaption>
							<h2>Burger <span>Queen</span></h2>
							<div>
								<p>Julia dances in the deep dark</p>
								<p>She loves the smell of the ocean</p>
								<p>And dives into the morning light</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>

            </section>

                            )
                        }
                    }
                    
export default Project;