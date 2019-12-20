import React from "react";
import Chart from "./chart";
import { YEAR_VALUATION_CHART_OPTIONS } from "../constants";
import {
  getTimeSeriesConfig,
  calculateTimeSeries,
  deriveFromTimeSeries
} from "../utils";

class YearValuationChart extends React.Component {
  prepareData = () => {
    let { cone, invSum } = this.props;
    let timeSeriesConfig = getTimeSeriesConfig(cone, invSum);
    let timeSeries = calculateTimeSeries(timeSeriesConfig);
    let {
      labels,
      dataGoodArr,
      dataMedianArr,
      dataBadArr
    } = deriveFromTimeSeries(timeSeries);
    console.log(labels, dataGoodArr, dataMedianArr, dataBadArr);
    return {
      datasets: [
        {
          data: dataGoodArr,
          label: "Good performance",
          borderColor: "rgba(100, 255, 100, 0.2)",
          fill: false,
          pointRadius: 0
        },
        {
          data: dataMedianArr,
          label: "Median performance",
          borderColor: "rgba(100, 100, 100, 0.2)",
          fill: false,
          pointRadius: 0
        },
        {
          data: dataBadArr,
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
