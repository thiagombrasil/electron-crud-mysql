import React, { Component } from 'react';
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';
import Settings from './components/Settings';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Settings />
        <Sidebar />
        <main>
        </main>
      </div>
    );
  }
}

export default App;
