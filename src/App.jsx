import { useState } from "react";

import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import ResultsTable from "./Components/ResultsTable";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 5000,
    annualInvestment: 1000,
    expectedReturn: 1.1,
    duration: 5
  });

  const inputIsValid = userInput.duration >= 1;

  function changeUserInput(identifier, value) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [identifier]: +value
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput changeUserInput={changeUserInput} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <ResultsTable userInput={userInput}/>}
    </>
  )
}

export default App
