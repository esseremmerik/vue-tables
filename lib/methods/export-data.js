var search = require('../filters/search');
var render = require('../filters/render');

module.exports = function () {
    var data = this.data;
    var columns = this.columns;
    var OrdeBy = this.orderBy;

    var format = $("#export_types").val();

    var data = {
        query: this.query,
        orderBy: this.orderBy.column,
        ascending: this.orderBy.ascending,
        byColumn: this.options.filterByColumn ? 1 : 0,
        format: format,
        columns: columns
    };

    var that = this;

    var serverResponse = this.$http.post(this.options.export.postUrl, data);
    that.options.exportDataSuccess(data);
    
    return null;
}