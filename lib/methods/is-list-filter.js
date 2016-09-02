module.exports = function(column) {
  return this.options.listColumns.hasOwnProperty(column) && (!this.options.multiListColumns.hasOwnProperty(column));
}
