module.exports = function() {
    // console.log(this.columns);
    //
    // console.log(this.data[0]);
    // console.log(Object.keys(this.data[0]));
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

