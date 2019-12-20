import React from "react";

class InvestmentSumFeild extends React.Component {
  onChange = event => {
    let { onInvestmentSumChange } = this.props;
    let newValue = event.target.value;
    onInvestmentSumChange(newValue);
  };
  render = () => {
    let { value } = this.props;
    return (
      <div>
        Investment Sum:
        <input type="number" value={value} onChange={this.onChange} />
      </div>
    );
  };
}

export default InvestmentSumFeild;
