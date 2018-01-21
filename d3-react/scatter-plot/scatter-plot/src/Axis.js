import React from 'react';
import * as d3 from 'd3';

export default class Axis extends React.Component {
  componentDidMount() {
    this.renderAxis();
  }
  
  componentDidUpdate() {
    this.renderAxis();
  }
  
  orient = this.props;
  
  renderAxis(orient) {
    const node = this.refs.axis;
    const axisBottom = d3.axisBottom()
      .scale(this.props.scale);
    const axisLeft = d3.axisLeft()
      .scale(this.props.scale);
    
    this.props.orient === 'Bottom' ? d3.select(node).call(axisBottom) : d3.select(node).call(axisLeft);
  }
  
  render() {
    return <g className='axis' ref='axis' transform={this.props.translate}></g>
  }
}