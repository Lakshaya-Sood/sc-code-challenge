import React from "react";
import Chart from "./chart";
import { YEAR_VALUATION_CHART_OPTIONS } from "../constants";
import { calculateTimeSeries } from "../utils";

class YearValuationChart extends React.Component {
  prepareData = () => {
    const { cone } = this.props;
    const { mu, sigma } = cone;
    const fee = 0.01;

    const timeSeries = calculateTimeSeries({
      mu,
      sigma,
      years: 10,
      initialSum: 10000,
      monthlySum: 200,
      fee
    });

    const labels = timeSeries.median.map((v, idx) =>
      idx % 12 == 0 ? idx / 12 : ""
    );
    const dataMedian = timeSeries.median.map(v => v.y);
    const dataGood = timeSeries.upper95.map(v => v.y);
    const dataBad = timeSeries.lower05.map(v => v.y);

    return {
      datasets: [
        {
          data: dataGood,
          label: "Good performance",
          borderColor: "rgba(100, 255, 100, 0.2)",
          fill: false,
          pointRadius: 0
        },
        {
          data: dataMedian,
          label: "Median performance",
          borderColor: "rgba(100, 100, 100, 0.2)",
          fill: false,
          pointRadius: 0
        },
        {
          data: dataBad,
          label: "Bad performance",
          borderColor: "rgba(255, 100, 100, 0.2)",
          fill: false,
          pointRadius: 0
        }
      ],
      labels
    };
  };
  render = () => {
    const { cone } = this.props;
    return !!cone ? (
      <Chart
        type={"line"}
        data={this.prepareData()}
        width={600}
        height={400}
        options={YEAR_VALUATION_CHART_OPTIONS}
      />
    ) : (
      <p>cone not present</p>
    );
  };
}
export default YearValuationChart;
