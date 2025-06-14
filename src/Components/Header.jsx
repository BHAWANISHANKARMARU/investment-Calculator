import reactImg from '../assets/investment-calculator-logo.png';
import UserInput from './UserInput';
import List from './List';
import { useState } from 'react';

export default function Header(){
    const [inputValues, setInputValues] = useState({ 
        initialInvestment: 15000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: Number(value)
        }));
    }

    return (
        <header id='header'>
            <img src={reactImg} alt='reactimg' />
            <h1>Investment Calculator</h1>
            <UserInput values={inputValues} onChange={handleChange} />
            <List data={inputValues} />
        </header>
    )
}

