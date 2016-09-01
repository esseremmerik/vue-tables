var search = require('../filters/search');
var render = require('../filters/render');

module.exports = function() {
    var data = this.data;
    var columns = this.columns;
    var OrdeBy = this.orderBy;

    var filterDataFULL = search.call(this, data, '{"id":"","firstname":""}');
    var filterData = [];

    // this.options.dateFormat;

    filterDataFULL.forEach(function(row, rowIndex) {
        var singleRow = {};
        columns.forEach(function(column, columnIndex) {
            if(row.hasOwnProperty(column)){
                singleRow[column] = this.render(row[column], row, column);
            }
        });

        filterData.push(singleRow);
    });

    var PostData = {
        columns: columns,
        dataSet: filterData,
        type: 'excel'
    };

    // console.log(OrdeBy);
    console.log(JSON.stringify(filterData));
    // console.log(columns);
}

function isMoment (obj) {
    return (obj != null && obj._isAMomentObject != null);
}