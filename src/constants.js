export const RISK_RANGE = {
  min: 3,
  max: 25
};

export const DATA_TABLE_CONFIG = [
  { colHeader: "month", rowKey: "entry" },
  { colHeader: "good", rowKey: "dataGood" },
  { colHeader: "median", rowKey: "dataMedian" },
  { colHeader: "bad", rowKey: "dataBad" }
];

export const YEAR_VALUATION_CHART_OPTIONS = {
  responsive: false,
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Years"
        },
        gridLines: {
          drawOnChartArea: false
        }
      }
    ],
    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Valuation (EUR)"
        }
      }
    ]
  }
};
