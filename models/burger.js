var orm = require('./config/orm.js');

orm.selectAll('burgers')
console.log('burger code here')

module.exports = orm;