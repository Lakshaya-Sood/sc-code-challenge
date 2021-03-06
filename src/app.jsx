import React from "react";

import ErrorBoundary from "./components/error-boundary";
import Menu from "./components/menu";
import RiskLevelSelector from "./components/risk-level-selector";
import InvestmentSumFeild from "./components/investment-sum-feild";
import Routes from "./routes";
import ConesClient from "./clients/cones-client";
import { filterConesbyRisk } from "./utils";
import { RISK_RANGE } from "./constants";

class App extends React.Component {
  state = {
    riskLevel: 3,
    invSum: 10000,
    cones: [],
    cone: null,
    isFetchingCones: false,
    fetchConesError: null
  };
  componentDidMount = () => this.fetchCones();
  fetchCones = async () => {
    this.setState({ isFetchingCones: true });
    try {
      let cones = await ConesClient.getData();
      let { riskLevel } = this.state;
      let cone = filterConesbyRisk(cones, riskLevel);
      this.setState({
        cones,
        cone,
        isFetchingCones: false,
        fetchConesError: null
      });
    } catch (err) {
      this.setState({
        cones: [],
        cone: null,
        isFetchingCones: false,
        fetchConesError: err
      });
    }
  };
  onChangeRiskLevel = riskLevel => {
    let { cones } = this.state;
    let cone = filterConesbyRisk(cones, riskLevel);
    this.setState({ riskLevel, cone });
  };
  onInvestmentSumChange = invSum => this.setState({ invSum });
  render = () => {
    let { riskLevel, invSum, cone, isFetchingCones } = this.state;
    return (
      <ErrorBoundary>
        <Menu />
        <RiskLevelSelector
          range={RISK_RANGE}
          onChangeRiskLevel={this.onChangeRiskLevel}
          value={riskLevel}
        />
        <InvestmentSumFeild
          onInvestmentSumChange={this.onInvestmentSumChange}
          value={invSum}
        />
        <Routes invSum={invSum} cone={cone} isFetchingCones={isFetchingCones} />
      </ErrorBoundary>
    );
  };
}

export default App;
