import React from "react";

const Table = ({ data, config }) => {
  const rowKeys = config.map(c => c.rowKey);
  const rows = data.map((item, idx) => (
    <tr key={idx}>
      {rowKeys.map((k, index) => (
        <td key={index}>{item[k]}</td>
      ))}
    </tr>
  ));

  const colHeaders = config.map(c => c.colHeader);
  const thS = colHeaders.map(col =>
    React.createElement("th", { key: col }, col)
  );
  const tableHeader = React.createElement("tr", {}, thS);

  return (
    <table>
      <thead>{tableHeader}</thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
