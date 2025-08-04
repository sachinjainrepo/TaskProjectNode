const fs = require('fs');
const tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
module.exports = tasks;