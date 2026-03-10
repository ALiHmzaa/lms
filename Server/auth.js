const express = require('express');
const app = express();
const { exec } = require('child_process');

app.get('/ping', (req, res) => {
    // VULNERABLE: Direct command injection from user input
    const ali = req.query.target;
    exec("ping -c 4 " + ali, (err, stdout, stderr) => {
        res.send(stdout);
    });
});
