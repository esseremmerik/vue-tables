module.exports = function(row) {
   return row['warning'] != undefined ? 'has-warning' : '';
}
