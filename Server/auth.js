const express = require('express');
const app = express();
const { exec } = require('child_process');

app.get('/ping', (req, res) => {
    // VULNERABLE: Direct command injection from user input
    const target = req.query.target;
    exec("ping -c 4 " + target, (err, stdout, stderr) => {
        res.send(stdout);
    });
});