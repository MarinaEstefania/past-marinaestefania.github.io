import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Project from './components/Project'
import CoverPage from './components/CoverPage'
import Contact from './components/Contact'
import StickyFooterMenu from './components/StickyFooterMenu'

class App extends Component {
  render() {
    return (
      <div >
      <div class="col-sm-12 my-container main">
        <Navbar></Navbar>

        <div class="row my-row">
          <div class="col-sm-12 my-col my-flex ">
            <CoverPage></CoverPage>
          </div>
        </div>

        <div class="row align-items-stretch my-row my-row-about">
          <div class="col-xs-12 col-sm-12 col-md-10 col-lg-8 my-col">
            <About></About>
          </div>
        </div>
        
        <div class="row  align-items-stretch my-row my-row-project">
          <div class="col-xs-12 col-sm-12 col-md-10 col-lg-9  my-col ">
            <Project></Project>
          </div>
        </div>
    
        <div class="row my-row contact">
          <div class="col-md-12 col-sm-12 my-col ">
          <Contact></Contact>
          </div>
        </div>
      </div>
   
      <div class=" d-block d-sm-none col-md-12 col-sm-12 my-col ">
        <StickyFooterMenu></StickyFooterMenu>
      </div>
 
      </div>
    )
  }
}

export default App;