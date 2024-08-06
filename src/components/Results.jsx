import { calculateInvestmentResults } from '../utils/investment.js'

function Results( initialInvestment, annualInvestment, expectedReturn, duration) {

    const test = calculateInvestmentResults(initialInvestment, annualInvestment, expectedReturn, duration)
    console.log(test)
    return (<>
    
    <p>{test[0].interest}</p>
    </>
    )
};

export default Results