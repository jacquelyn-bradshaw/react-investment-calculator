import { useState } from "react";

export default function UserInput () {
  const [userInput, setUserInput] = useState({
    initialInvestment: 5000,
    annualInvestment: 1000,
    expectedReturn: 1.1,
    duration: 5
  });

  function changeUserInput (identifier, value) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [identifier]: value
      };
    });
  }

  return <section id="user-input">
    <div className="input-group">
      <p>
        <label>Initial Investment</label>
        <input
          type="number"
          onChange={(event)=>{changeUserInput("initialInvestment", event.target.value)}}
          value={userInput.initialInvestment}
        />
      </p>
      <p>
        <label>Annual Investment</label>
        <input
          type="number"
          onChange={(event)=>{changeUserInput("annualInvestment", event.target.value)}}
          value={userInput.annualInvestment}
        />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label>Expected Return</label>
        <input
          type="number"
          step="0.01"
          onChange={(event)=>{changeUserInput("expectedReturn", event.target.value)}}
          value={userInput.expectedReturn}
        />
      </p>
      <p>
        <label>Duration</label>
        <input
          type="number"
          onChange={(event)=>{changeUserInput("duration", event.target.value)}}
          value={userInput.duration}
        />
      </p>
    </div>
  </section>
}
