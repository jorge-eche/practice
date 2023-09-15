import { useState } from "react";
import Header from "./components/UI/Header";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";
import ResultsTable from "./components/Results/ResultsTable";

function App() {
  const [finalCalculation, setFinalCalculation] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    let totalInterest = 0;
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
      });
    }

    setFinalCalculation(yearlyData);
  };

  const resetFinalCalculation = () => {
    setFinalCalculation([]);
  };

  let content = <p>No data entered</p>;

  if (finalCalculation.length > 0)
    content = <ResultsTable finalCalculation={finalCalculation} />;

  return (
    <div>
      <Header />
      <CalculatorForm
        calculateHandler={calculateHandler}
        resetFinalCalculation={resetFinalCalculation}
      />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {content}
    </div>
  );
}

export default App;
