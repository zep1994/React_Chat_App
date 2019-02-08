import React, { Component } from 'react';
import { SideBar } from './containers/Sidebar'
import { MessagesList } from './containers/MessagesList'
import { AddMessage } from './containers/AddMessage'

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <SideBar></SideBar>
        <section id="main">
          <MessagesList></MessagesList>>
          <AddMessage></AddMessage>>
        </section>
      </div>
     
    );
  }
}

export default App;
