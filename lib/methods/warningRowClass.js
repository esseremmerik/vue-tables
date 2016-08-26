module.exports = function(row) {
   return row['warning'] != undefined ?
       row['warning'] ? 'has-warning' : '' : '';
}
