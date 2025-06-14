export default function UserInput({ onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div className="input-control">
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            id="initial-investment"
            name="initialInvestment"
            onChange={onChange}
          />
        </div>
        <div className="input-control">
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            id="annual-investment"
            name="annualInvestment"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-control">
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="text"
            id="expected-return"
            name="expectedReturn"
            onChange={onChange}
          />
        </div>
        <div className="input-control">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            onChange={onChange}
          />
        </div>
      </div>
    </section>
  )
}
