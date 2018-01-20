import React, { Component } from 'react';
import ProgressArc from './ProgressArc';

class App extends Component {
  render() {
    return (
      <div>
        <ProgressArc
          height={300}
          width={300}
          innerRadius={100}
          outerRadius={110}
          id='d3-arc'
          backgroundColor='e6e6e6'
          foregroundColor='00ff00'
          percentComplete={0.3}
        />
        <ProgressArc
          height={300}
          width={300}
          innerRadius={50}
          outerRadius={30}
          id='d3-arc'
          backgroundColor='e6e6e6'
          foregroundColor='red'
          percentComplete={0.8}
        />
      </div>

    );
  }
}

export default App;
