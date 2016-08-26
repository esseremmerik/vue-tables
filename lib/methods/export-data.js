module.exports = function() {
    var data = this.data;
    var filterData = [];
    var columns = this.columns;
    var OrdeBy = this.orderBy;

    data.forEach(function(row, rowIndex) {
        //| customFilters customQ | search q
        //| orderBy orderBy.column orderBy.ascending
        if(1 == 1){
            filterData.push(row);
        }
    });

    console.log(this.query);
    console.log(OrdeBy);
    console.log(filterData);
    console.log(columns);
}