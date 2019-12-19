import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './menu';
import RiskLevelSelector from './risk-level-selector';
import Table from './table';
import Chart from './chart';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            riskLevel: 3
        };
        this.onChangeRiskLevel = this.onChangeRiskLevel.bind(this);
    }

    onChangeRiskLevel(riskLevel) {
        this.setState({riskLevel});
    }

    render() {
        const {riskLevel} = this.state;
        return (
            <Router>
                <div>
                    <Menu/>
                    <RiskLevelSelector onChangeRiskLevel={this.onChangeRiskLevel}/>
                    <Route exact path="/" component={() => <Table riskLevel={riskLevel}/>} />
                    <Route path="/table" component={() => <Table riskLevel={riskLevel}/>} />
                    <Route path="/chart" component={() => <Chart riskLevel={riskLevel}/>} />
                </div>
            </Router>
        );
    }

}
