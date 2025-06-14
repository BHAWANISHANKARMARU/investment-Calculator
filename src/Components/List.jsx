    export default function List({data}){
        const { initialInvestment, annualInvestment, expectedReturn, duration } = data;

        let currentTotal = initialInvestment;
        let totalInterest = 0;

        const yearData = [];

        for (let year = 1; year <= duration; year++) {
            const interest = currentTotal * (expectedReturn / 100);
            totalInterest += interest;

            currentTotal += annualInvestment;

            yearData.push({ 
                year, 
                investmentValue: currentTotal.toFixed(2),
                interest: interest.toFixed(2),
                totalInterest: totalInterest.toFixed(2),
                investedCapital: (initialInvestment + annualInvestment * (year - 1)).toFixed(2),
            });
        }
        return(
            <div id="result">
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Investment Value</th>
                            <th>Interest (Year)</th>
                            <th>Total Interest</th>
                            <th>Invested Capital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {yearData.map((item) => (
                        <tr key={item.year}>
                            <td>{item.year}</td>
                            <td>${item.investmentValue}</td>
                            <td>${item.interest}</td>
                            <td>${item.totalInterest}</td>
                            <td>${item.investedCapital}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
    




