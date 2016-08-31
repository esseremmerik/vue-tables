var search = require('../filters/search');

module.exports = function() {
    var data = this.data;
    var columns = this.columns;
    var OrdeBy = this.orderBy;

    var filterDataFULL = search.call(this, data, '{"id":"","firstname":"stefan"}');
    var filterData = [];

    filterDataFULL.forEach(function(row, rowIndex) {
        var singleRow = {};
        columns.forEach(function(column, columnIndex) {
            if(row.hasOwnProperty(column)){
                singleRow[column] = row[column];
            }
        });

        filterData.push(singleRow);
    });

    var PostData = {
        columns: columns,
        dataSet: filterData,
        type: 'excel'
    };

    // console.log(JSON.stringify(PostData));
    // console.log(OrdeBy);
    // console.log(filterData);
    // console.log(columns);
}