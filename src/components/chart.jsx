import React from "react";
import { Chart as ChartJs } from "chart.js";

class Chart extends React.Component {
  chart = null;
  getDerivedStateFromProps = () => {};
  componentDidMount = () => this.drawChart();
  componentDidUpdate = () => this.reDrawChart();
  reDrawChart = () => {
    this.chart.destroy();
    this.drawChart();
  };
  drawChart = () => {
    const context = this.canvas.getContext("2d");
    const { type, data, options } = this.props;
    const config = {
      type,
      data,
      options
    };
    this.chart = new ChartJs(context, config);
  };
  render = () => {
    const { width, height } = this.props;
    return (
      <div>
        <canvas
          ref={ref => (this.canvas = ref)}
          width={width}
          height={height}
        />
      </div>
    );
  };
}

export default Chart;
