
const express = require('express');
const app = express();

// Function to calculate GCD using BigInt
function getGCD(a, b) {
    while (b !== 0n) {
        [a, b] = [b, a % b];
    }
    return a;
}

// Route to calculate LCM
app.get('/joynag151_gmail_com', (req, res) => {
    const { x: xStr, y: yStr } = req.query;

    // Check if parameters exist
    if (xStr === undefined || yStr === undefined) {
        return res.type('text/plain').send('NaN');
    }

    let x, y;
    
    // Convert inputs to BigInt and handle formatting errors
    try {
        x = BigInt(xStr);
        y = BigInt(yStr);
    } catch (e) {
        return res.type('text/plain').send('NaN');
    }

    // Validate input (Should be greater than 0)
    if (x <= 0n || y <= 0n) {
        return res.type('text/plain').send('NaN');
    }

    // Calculate LCM using BigInt formula
    const lcm = (x / getGCD(x, y)) * y;

    // Return the result as a string
    return res.type('text/plain').send(String(lcm));
});

// Export for Vercel
module.exports = app;