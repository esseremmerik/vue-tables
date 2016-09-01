var merge = require('merge');

module.exports = function () {

    var el;
    var datepickerOptions = merge.recursive(this.options.datepickerOptions, {
        autoUpdateInput: true,
        singleDatePicker: false,
        locale: {
            format: this.options.dateFormat
        }
    });

    var that = this;

    that.options.dateColumns.forEach(function (column) {
        el = $("#VueTables__" + column + "-filter");

        el.daterangepicker();
        el.on('apply.daterangepicker', function (ev, picker) {
            that.query[column] = {
                start: picker.startDate.format('YYYY-MM-DD'),
                end: picker.endDate.format('YYYY-MM-DD')
            };
            $(this).text(picker.startDate.format(that.options.dateFormat) + " - " + picker.endDate.format(that.options.dateFormat));

            that.search();
        }).on('cancel.daterangepicker', function (ev, picker) {
            that.query[column] = '';
            $(this).html("<span class='VueTables__filter-placeholder'>" + that.display('filterBy', that.getHeading(column) + "</span>"));
            that.search();
        }).on('show.daterangepicker', function (ev, picker){
        });

    });


}
