import React,{Component} from 'react';
import * as d3 from 'd3';

class ProgressArc extends Component {

  displayName: 'ProgressArc';

  propTypes: {
    id: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    backgroundColor: PropTypes.string,
    foregroundColor: PropTypes.string,
    percentComplete: PropTypes.number
  }
  componentDidMount() {
    const context = this.setContext();
    this.setBackground(context)
    this.setForeground(context);
  }

  tau = Math.PI * 2;

  arc() {
    const { innerRadius, outerRadius } = this.props;
    return d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(0)
  }

  setContext() {
    const { height, width, id } = this.props;
    return d3.select(this.refs.arc)
      .append('svg')
      .attr('height', height)
      .attr('width', width)
      .attr('id', id)
      .append('g')
      .attr('transform', `translate(${height / 2}, ${width / 2})`);
  }

  setBackground(context) {
    const { backgroundColor } = this.props;
    return context.append('path')
      .datum({ endAngle: this.tau })
      .style('fill', backgroundColor)
      .attr('d', this.arc())
  }

  setForeground(context) {
    const { foregroundColor, percentComplete } = this.props;
    return context.append('path')
      .datum({ endAngle: this.tau * percentComplete })
      .style('fill', foregroundColor)
      .attr('d', this.arc());
  }

  render() {
      return (
          <div ref="arc"></div>
      );
  }
}

export default ProgressArc;
