module.exports = function() {
      return displayableInactiveColumns(Object.keys(this.data[0]), this.columns.concat(this.customColumns), this.windowWidth, this.columnsDisplay);
}

function displayableInactiveColumns(allColumns, columns, windowWidth, display) {
   return allColumns.filter(function(column) {
       if(column == "warning"){
            return false;
       }
        return columns.indexOf(column) == -1;
  });

}

