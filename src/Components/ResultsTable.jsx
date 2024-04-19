import {calculateInvestmentResults, formatter } from "../util/investment.js"

export default function ResultsTable ({userInput}) {
  const calculatedInvestment = calculateInvestmentResults(userInput);

  console.log(calculatedInvestment);

  return <table id="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest(Year)</th>
        <th>Total Interest</th>
        <th>Capital Invested</th>
      </tr>
    </thead>
    <tbody>
        {calculatedInvestment.map(year => {
            const totalInterest = 
              year.valueEndOfYear -
              (year.annualInvestment * year.year) -
              userInput.initialInvestment;

            const capitalInvested = year.valueEndOfYear - totalInterest;

          return <tr key={year.year}>
            <td>{year.year}</td>
            <td>{formatter.format(year.valueEndOfYear)}</td>
            <td>{formatter.format(year.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{capitalInvested}</td>
          </tr>
        })}
    </tbody>
  </table>
}
