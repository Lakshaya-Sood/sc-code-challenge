import React from 'react';
import PropTypes from 'prop-types';

class RiskLevelSelector extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        let {onChangeRiskLevel} = this.props;
        var riskLevel = parseInt(event.target.value);
        onChangeRiskLevel(riskLevel);
    }

    render() {

        const {minRiskLevel, maxRiskLevel} = this.props;
        var defultRiskl = 10;
        const options = [];
        for(let k=1; k<=maxRiskLevel; ++k) {
            options.push(
                <option key={k} value={k}>{k}</option>
            );
        }

        return (
            <div>
                Risk level:
                <select onChange={this.onChange} defaultValue={defultRiskl}>
                    {options}
                </select>
            </div>
        );
    }
}

RiskLevelSelector.defaultProps = {
    minRiskLevel: 3,
    maxRiskLevel: 25,
    onChangeRiskLevel: () => {}
};

RiskLevelSelector.propTypes = {
    minRiskLevel: PropTypes.number,
    maxRiskLevel: PropTypes.number,
    onChangeRiskLevel: PropTypes.func
};

export default RiskLevelSelector;
