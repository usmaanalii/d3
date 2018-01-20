import React, { Component } from 'react';
import ProgressArc from './ProgressArc';

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = { percentComplete: 0.3 };
    this.togglePercent = this.togglePercent.bind(this);
  }

  togglePercent() {
    const percentage = this.state.percentComplete === 0.3 ? 0.7 : 0.3;
    this.setState({ percentComplete: percentage });
  }

  render() {
    const { percentComplete } = this.state;
    console.log(percentComplete);
    return (
      <div>
        <a onClick={this.togglePercent}>Toggle</a>
        <ProgressArc
          duration={2000}
          height={300}
          width={300}
          innerRadius={100}
          outerRadius={110}
          id='d3-arc'
          backgroundColor='e6e6e6'
          foregroundColor='00ff00'
          percentComplete={percentComplete}
        />
        {/* <ProgressArc
          height={300}
          width={300}
          innerRadius={50}
          outerRadius={30}
          id='d3-arc'
          backgroundColor='e6e6e6'
          foregroundColor='red'
          percentComplete={0.8}
        /> */}
      </div>

    );
  }
}

export default App;
