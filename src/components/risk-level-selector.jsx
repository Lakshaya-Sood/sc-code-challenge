import React from "react";

class RiskLevelSelector extends React.Component {
  onChange = event => {
    let { onChangeRiskLevel } = this.props;
    var riskLevel = parseInt(event.target.value);
    onChangeRiskLevel(riskLevel);
  };

  prepareOptions = () => {
    let { min, max } = this.props.range;
    const options = [];
    for (let k = min; k <= max; ++k) {
      options.push(
        <option key={k} value={k}>
          {k}
        </option>
      );
    }
    return options;
  };

  render = () => {
    let { value } = this.props;
    return (
      <div>
        Risk level:
        <select onChange={this.onChange} value={value}>
          {this.prepareOptions()}
        </select>
      </div>
    );
  };
}

export default RiskLevelSelector;
