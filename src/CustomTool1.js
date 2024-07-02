// src/CustomTool1.js
import React, { useState } from 'react';

const CustomTool1 = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const calculateResult = () => {
        try {
            setResult(eval(input)); // Note: eval can be dangerous, consider using a math library
        } catch (error) {
            setResult('Error');
        }
    };

    return ( <div>
        <h2> Calculator </h2> <
        input type = "text"
        value = { input }
        onChange = { handleInput }
        /> 
        <button onClick = { calculateResult } > Calculate </button> 
        <p> Result: { result } </p> 
        </div>
    );
};

export default CustomTool1;