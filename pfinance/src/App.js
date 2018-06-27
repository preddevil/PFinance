import React, { Component } from 'react';
import StockPageContainer from './components/StockPageContainer';

class App extends Component {
  render() {
    return (
      <div>
        <header>          
          <h1>Welcome to React</h1>
        </header>
        <StockPageContainer />
      </div>
    );
  }
}

export default App;
