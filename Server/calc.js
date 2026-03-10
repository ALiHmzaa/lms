const express = require('express');
const app = express();

app.get('/calculate', (req, res) => {
    // CRITICAL VULNERABILITY: Arbitrary Code Execution
    const userMathExpression = req.query.expr;
    
    // Using eval() on unvalidated user input is highly dangerous
    const result = eval(userMathExpression); 
    
    res.contentType('text/plain').send("The result is: " + result);
});