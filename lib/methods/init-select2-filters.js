var merge = require('merge');

module.exports = function () {
    var that = this;

    if(Object.keys(this.options.listColumns).length > 0) {
        var keys = Object.keys(this.options.listColumns);
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
    }
};
