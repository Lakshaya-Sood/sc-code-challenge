import React from "react";
import Table from "./table";
import { DATA_TABLE_CONFIG } from "../constants";
import { calculateTimeSeries } from "../utils";

class DataTable extends React.Component {
  prepareData = () => {
    let { cone } = this.props;
    const fee = 0.01;

    var timeSeries = calculateTimeSeries({
      mu: cone.mu,
      sigma: cone.sigma,
      years: 10,
      initialSum: 10000,
      monthlySum: 200,
      fee
    });

    const months = timeSeries.median.map((v, idx) => idx);
    var dataGoods = timeSeries.upper95.map(v => v.y);
    let dataMedians = timeSeries.median.map(v => v.y);
    const dataBads = timeSeries.lower05.map(v => v.y);

    return months.map((entry, idx) => {
      return {
        entry,
        dataGood: dataGoods[idx],
        dataMedian: dataMedians[idx],
        dataBads: dataBads[idx]
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
