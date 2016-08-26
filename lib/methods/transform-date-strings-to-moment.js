module.exports = function() {
  this.data.forEach(function(row, index) {
    // console.log("debug: " + index);
    // console.log(this.options.dateColumns);
    this.options.dateColumns.forEach(function(column) {
      console.log(row[column]);
      row[column] = moment(row[column], this.options.toMomentFormat);
    }.bind(this));
  }.bind(this));
}
