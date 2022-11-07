// import randomUUID
const { randomUUID } = require('crypto');
// import moment
const moment = require('moment');
const fs = require('fs');

// Create a file in RP/hello.test
// Create the RP directory if it does not exist
if (!fs.existsSync('RP')) {
    fs.mkdirSync('RP');
}
fs.writeFileSync('RP/hello.test', moment().format("YYYY-MM-DD hh:mm:ss"));