const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const YearlyResults = ({ yearlyData }) => {
  const {
    year,
    savingsEndOfYear,
    yearlyInterest,
    yearlyContribution,
    totalInterest,
  } = yearlyData;
  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(savingsEndOfYear)}</td>
      <td>{formatter.format(yearlyInterest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(yearlyContribution * year)}</td>
    </tr>
  );
};

export default YearlyResults;
