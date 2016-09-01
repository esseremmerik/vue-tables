var merge = require('merge');

module.exports = function () {
    var that = this;

    if(Object.keys(this.options.multiListColumns).length > 0) {
        var keys = Object.keys(this.options.multiListColumns);
        keys.forEach( function(item) {
            var el = $("#VueTables__" + item + "-filter");

            el.select2({
                placeholder: "",
                allowClear: true,
                theme: "procademy"
            });
            el.on("select2:close", function (evt) {
                var value = (el.select2("val"));
                if(value == null){
                    value = "";
                }
                that.query[item] = value;

                that.search();
            });
            el.on('select2:select', function (evt) {
                // console.log(evt);
            });
        });
        //     console.log("#VueTables__" + s + "-filter");


        //         that.query[column] = {
        //             start: picker.startDate.format('YYYY-MM-DD'),
        //             end: picker.endDate.format('YYYY-MM-DD')
        //         };
        //         that.search();


        // that.options.multiListColumns.forEach(function (column) {
        //     var el = $("#VueTables__" + column + "-filter");
        //     console.log("#VueTables__" + column + "-filter");
        //     el.select2();
        //     el.on('select2:select', function (evt) {
        //         console.log(evt);
        //     });
        // });
    }
};
