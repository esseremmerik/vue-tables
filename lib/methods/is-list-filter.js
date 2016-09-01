module.exports = function(column) {
  // console.log(column);
  // console.log(this.options.listColumns);
  return this.options.listColumns.hasOwnProperty(column);
}
