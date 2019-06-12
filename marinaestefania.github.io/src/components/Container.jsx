import React, {Component} from 'react';
import '../style/container.css';

class Container extends Component{
    render(){
        return(
            <div >
              <div class="row my-row about-row">
                <div class="col-sm-12 my-col">
                  <h4>ABOUT ME</h4>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                </div>
                <div class="col-sm-12 my-col">
                  <img src='https://sorles.com/wp-content/uploads/2018/12/FOTO-CUADRO-50X50.jpg'></img> 
                </div>
              </div>
              <div class="row my-row">
                <div class="col-sm-12 my-col">
                <h1>WORK</h1> 
                </div>
              </div>
          </div>
        )
    }
}

export default Container;