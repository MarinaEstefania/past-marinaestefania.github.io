import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './components/About'
import Project from './components/Project'
import Sidebar from './components/Sidebar'
import CoverPage from './components/CoverPage'
import Contact from './components/Contact'
import StickyFooterMenu from './components/StickyFooterMenu'

class App extends Component {
  render() {
    return (
      <div >
      <div class="col-sm-12 my-container main">
      <Navbar></Navbar>
        <div class="row my-row coverPage">
          <div class="col-sm-12 my-col my-flex ">
         
            <CoverPage></CoverPage>
          </div>
        </div>
        <div class="row justify-content-between align-items-stretch my-row">
        {/*   <div class="d-none d-sm-block col-md-1 col-lg-2 my-col">
            <Sidebar></Sidebar>
          </div> */} 
          <div class="col-xs-12 col-sm-12 col-md-10 col-lg-8 offset-md-2 my-col justify-content-between">
            <About></About>
          </div>
      {/*  <div class="d-none d-sm-block col-md-1 col-lg-2 my-col">
            <Sidebar></Sidebar>
          </div>  */}
        </div>
        
        <div class="row justify-content-between align-items-stretch my-row my-row-Project">
        {/*   <div class="d-none d-sm-block col-md-1 col-lg-2 my-col">
            <Sidebar></Sidebar>
          </div> */} 
          <div class="col-xs-12 col-sm-12 col-md-10 col-lg-8 offset-md-2 my-col  justify-content-between">
            <Project></Project>
          </div>
      {/*  <div class="d-none d-sm-block col-md-1 col-lg-2 my-col">
            <Sidebar></Sidebar>
          </div>  */}
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