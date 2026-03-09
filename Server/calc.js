const express = require('express');
const app = express();

app.get('/calculate', (req, res) => {
    // CRITICAL VULNERABILITY: Arbitrary Code Execution
    const userMathExpression = req.query.expr;
    
    // Using eval() on unvalidated user input is highly dangerous
    const result = Math.evaluate(userMathExpression); 
    
    res.send("The result is: " + result);
});