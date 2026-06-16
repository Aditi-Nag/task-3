// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Function to calculate GCD
// function getGCD(a, b) {
//  while (b !== 0) {
//  [a, b] = [b, a % b];
//  }
//  return a;
// }

// // Route to calculate LCM
// app.get('/joynag151_gmail_com', (req, res) => {
//  const { x: xStr, y: yStr } = req.query;

//  // Check if parameters exist
//  if (xStr === undefined || yStr === undefined) {
//  return res.type('text/plain').send('NaN');
//  }

//  const x = Number(xStr);
//  const y = Number(yStr);

//  // Validate input
//  if (
//  !Number.isInteger(x) ||
//  !Number.isInteger(y) ||
//  x <= 0 ||
//  y <= 0
//  ) {
//  return res.type('text/plain').send('NaN');
//  }

//  // Calculate LCM
//  const lcm = (x / getGCD(x, y)) * y;

//  return res.type('text/plain').send(String(lcm));
// });

// // Start server
// app.listen(PORT, () => {
//  console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const app = express();

// Function to calculate GCD
function getGCD(a, b) {
  while (b !== 0) {
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

  const x = Number(xStr);
  const y = Number(yStr);

  // Validate input
  if (
    !Number.isInteger(x) ||
    !Number.isInteger(y) ||
    x <= 0 ||
    y <= 0
  ) {
    return res.type('text/plain').send('NaN');
  }

  // Calculate LCM
  const lcm = (x / getGCD(x, y)) * y;

  return res.type('text/plain').send(String(lcm));
});

// Export for Vercel
module.exports = app;