const React =  require('react');
import PropTypes from 'prop-types';
import {calculateTimeSeries} from './utils';
import cones from './../cones';

class Table extends React.Component {

    render() {
        let {riskLevel} = this.props;
        const cone = cones.filter(cone => cone.riskLevel == riskLevel)[0];
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
        var dataGood = timeSeries.upper95.map(v => v.y);
        let dataMedian = timeSeries.median.map(v => v.y);
        const dataBad = timeSeries.lower05.map(v => v.y);

        const rows = months.map((entry, idx) => (
            <tr key={idx}>
                <td>{entry}</td>
                <td>{dataGood[idx]}</td>
                <td>{dataMedian[idx]}</td>
                <td>{dataBad[idx]}</td>
            </tr>
        ));

        var tableHeader = React.createElement('tr', {}, [
            React.createElement('th', {key: 'month'}, 'month'),
            React.createElement('th', {key: 'good'}, 'good'),
            React.createElement('th', {key: 'median'}, 'median'),
            React.createElement('th', {key: 'bad'}, 'bad')
        ]);

        return (
            <table>
                <thead>
                    {tableHeader}
                </thead>
                <tbody>
                   {rows}
                </tbody>
            </table>
        );
    }

}

Table.defaultProps = {
    riskLevel: 3
};

Table.propTypes = {
    riskLevel: PropTypes.number
};

export default Table;
