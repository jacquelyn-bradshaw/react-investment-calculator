export default function UserInput ({changeUserInput, userInput}) {
  return <section id="user-input">
    <div className="input-group">
      <p>
        <label>Initial Investment</label>
        <input
          type="number"
          required
          value={userInput.initialInvestment}
          onChange={(event)=>changeUserInput("initialInvestment", event.target.value)}
        />
      </p>
      <p>
        <label>Annual Investment</label>
        <input
          type="number"
          required
          value={userInput.annualInvestment}
          onChange={(event)=>changeUserInput("annualInvestment", event.target.value)}
        />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label>Expected Return</label>
        <input
          type="number"
          step="0.01"
          required
          value={userInput.expectedReturn}
          onChange={(event)=>changeUserInput("expectedReturn", event.target.value)}
        />
      </p>
      <p>
        <label>Duration</label>
        <input
          type="number"
          required
          value={userInput.duration}
          onChange={(event)=>changeUserInput("duration", event.target.value)}
        />
      </p>
    </div>
  </section>
}
