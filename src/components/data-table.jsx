import React from "react";
import Table from "./table";
import { DATA_TABLE_CONFIG } from "../constants";
import {
  getTimeSeriesConfig,
  calculateTimeSeries,
  deriveFromTimeSeries
} from "../utils";

class DataTable extends React.Component {
  prepareData = () => {
    let { cone, invSum } = this.props;
    let timeSeriesConfig = getTimeSeriesConfig(cone, invSum);
    let timeSeries = calculateTimeSeries(timeSeriesConfig);
    let {
      monthArr,
      dataGoodArr,
      dataMedianArr,
      dataBadArr
    } = deriveFromTimeSeries(timeSeries);

    return monthArr.map((entry, idx) => {
      return {
        entry,
        dataGood: dataGoodArr[idx],
        dataMedian: dataMedianArr[idx],
        dataBads: dataBadArr[idx]
      };
    });
  };
  render = () => {
    let { cone } = this.props;
    return cone ? (
      <Table data={this.prepareData()} config={DATA_TABLE_CONFIG} />
    ) : (
      <p>cone not present</p>
    );
  };
}

export default DataTable;
