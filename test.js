// test.js
const fs = require('fs');
if (!fs.existsSync('./index.html')) { console.error('index.html missing'); process.exit(1); }
console.log('✅ Test Passed: index.html exists');
