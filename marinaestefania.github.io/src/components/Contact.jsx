import React, {Component} from 'react';
import '../style/contact.css';

class Contact extends Component{
    render(){
        return(
            <div>
                 <a name="about"><p className="my-div-pre-title-contact">GET IN TOUCH</p></a>
            <a name="contact"><p className="my-div-title-contact">CONTACT</p></a>
                    <div >
                    <p> </p> 
      {/*              <p>¡Let's make your website set appart from competition!</p>
             */}
                    <p >
                      <a className="icon-redes-contact fa-2x " target="_blank" href="https://www.linkedin.com/in/MarinaEstefania/">
                        <i class="fab fa-linkedin-in "></i></a>  
                      <a className="icon-redes-contact fa-2x" target="_blank" href="https://github.com/MarinaEstefania">
                        <i class="fab fa-github  "></i></a>                              
                   
                   </p> 
                    </div>
            </div>
        )
    }
}

export default Contact;