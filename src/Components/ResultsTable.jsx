import {calculateInvestmentResults } from "../util/investment.js"

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
        {calculatedInvestment.map((year) => {<tr><td>year</td></tr>})}
    </tbody>
  </table>
}
