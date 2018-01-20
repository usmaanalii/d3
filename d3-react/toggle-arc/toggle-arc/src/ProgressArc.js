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

  tau = Math.PI * 2;

  componentDidMount() {
    this.drawArc();
  }

  componentDidUpdate() {
    this.redrawArc();
  }

  drawArc() {
    const context = this.setContext();
    this.setBackground(context);
    this.setForeground(context);
    this.updatePercent(context);
  }

  redrawArc() {
    const { id } = this.props;
    const context = d3.select(`#${id}`);
    context.remove();
    this.drawArc();
  }

  arc() {
    const { innerRadius, outerRadius } = this.props;
    return d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(0)
  }

  arcTween(transition, newAngle, arc) {
    transition.attrTween('d', d => {
      const interpolate = d3.interpolate(d.endAngle, newAngle);
      const newArc = d;
      return (t) => {
        newArc.endAngle = interpolate(t);
        return arc(newArc);
      };
    });
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
      .datum({ endAngle: 0 })
      .style('fill', foregroundColor)
      .attr('d', this.arc());
  }

  updatePercent(context) {
    const { duration, percentComplete } = this.props;
    return this.setForeground(context)
      .transition()
      .duration(duration)
      .call(this.arcTween, this.tau * percentComplete, this.arc())
  }

  render() {
      return (
        <div ref="arc"></div>
      );
  }
}

export default ProgressArc;
