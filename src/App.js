import React, { Component } from 'react';
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Sidebar />
        <main>
        </main>
      </div>
    );
  }
}

export default App;
