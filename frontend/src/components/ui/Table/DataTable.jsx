import "./DataTable.css";

const DataTable = ({ headers, data }) => {
  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            if (row.sectionHeader) {
              return (
                <tr key={rowIndex} className="section-header">
                  <td colSpan={headers.length}>{row.sectionHeader}</td>
                </tr>
              );
            }
            return (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex} data-label={header}>
                    {row[header] || "--"}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
