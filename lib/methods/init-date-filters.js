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

        $("#VueTables__" + column + "-filter").daterangepicker();
        // console.log(el);
        // console.log("#VueTables__" + column + "-filter");

        // that.query[column] = {
        //     start: "2016-09-12",
        //     end: "2016-09-15"
        // };
        // that.search();

        $("#VueTables__" + column + "-filter").on('apply.daterangepicker', function (ev, picker) {
            console.log(picker.startDate.format('YYYY-MM-DD'));
            console.log(picker.endDate.format('YYYY-MM-DD'));
            console.log(that.query[column]);
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
            console.log("SHOW");
        });

    });


}
