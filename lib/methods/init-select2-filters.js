var merge = require('merge');

module.exports = function () {
    var that = this;

    if(Object.keys(this.options.listColumns).length > 0) {
        var keys = Object.keys(this.options.listColumns);

        var multiKeys = Object.keys(this.options.multiListColumns);

        var select2Theme = this.options.css.select2theme;

        keys.forEach( function(item) {
            var el = $("#VueTables__" + item + "-filter");
            if ( el.length ) {
                el.select2({
                    placeholder: "",
                    allowClear: true,
                    theme: select2Theme
                });

                el.on("select2:close", function (evt) {
                    var items= $(this).val();

                    var value = items;
                    if(value == null){
                        value = "";
                    }
                    that.query[item] = value;
                    that.search();
                });
                el.on('select2:select select2:unselect', function (evt) {
                    //this returns all the selected item
                    var items= $(this).val();

                    var value = items;
                    if(value == null){
                        value = "";
                    }
                    that.query[item] = value;
                    that.search();
                });
            }
        });
    }
};
