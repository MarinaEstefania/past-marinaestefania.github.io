import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Container from './components/Container'
import Sidebar from './components/Sidebar'
import CoverPage from './components/CoverPage'
import Contact from './components/Contact'


class App extends Component {
  render() {
    return (
      <div >
      <div class="col-sm-12 my-container main">
       
        <div class="row my-row coverPage">
          <div class=" col-sm-12 my-col ">
           <Navbar></Navbar>
            <CoverPage></CoverPage>
          </div>
        </div>
        <div class="row justify-content-between align-items-stretch my-row">
          <div class="col-md-2 my-col">
            <Sidebar></Sidebar>
          </div>
          <div class="col-md-8 my-col">
            <Container></Container>
          </div>
          <div class="col-md-2 my-col">
            <Sidebar></Sidebar>
          </div>
        </div>
        <div class="row my-row contact">
          <div class="col-md-12 col-sm-12 my-col ">
          <Contact></Contact>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default App;