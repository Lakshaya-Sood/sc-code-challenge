import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import DataTable from "./components/data-table";
import YearValuationChart from "./components/years-valuation-chart";

const Loading = () => <h3>Loading....</h3>;

const WhileLoading = (Component, props) => () => {
  let { cone, invSum, isFetchingCones } = props;
  return isFetchingCones ? (
    <Loading />
  ) : (
    <Component cone={cone} invSum={invSum} />
  );
};

const Routes = props => {
  return (
    <Switch>
      <Route path="/table" render={WhileLoading(DataTable, props)} />
      <Route path="/chart" render={WhileLoading(YearValuationChart, props)} />
      <Redirect to="/table" />
    </Switch>
  );
};

export default Routes;
