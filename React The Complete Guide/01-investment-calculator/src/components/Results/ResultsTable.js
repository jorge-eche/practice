import YearlyResults from "./YearlyResults";
import styles from "./ResultsTable.module.css";

const ResultsTable = ({ finalCalculation }) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {finalCalculation.map((yearlyData) => (
          <YearlyResults key={yearlyData.year} yearlyData={yearlyData} />
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
