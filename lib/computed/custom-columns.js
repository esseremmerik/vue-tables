module.exports = function() {
      var columns = [];
      this.templatesKeys.forEach(function(custom) {
            if(this.columns.indexOf(custom) > 0){
                  columns.push(custom);
            }
      }.bind(this));

      return columns.diff(this.columns);
      // return this.templatesKeys.diff(this.columns);
}
