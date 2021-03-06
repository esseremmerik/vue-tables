var methods = require('./mixins/methods');
var filters = require('./mixins/filters');
var computed = require('./mixins/computed');
var data = require('./mixins/data');
var created = require('./mixins/created');
var template = require('./helpers/generate-table-html');
var VuePagination = require('v-pagination');

exports.install = function (Vue, globalOptions, customOptions) {

    Vue.use(VuePagination);

    var customTemplate = customOptions && customOptions.template
        ? customOptions.template
        : undefined;

    var server = {
        template: template({
            source: 'Server',
            rowFilters: '',
            trackBy: '',
            columnFilters: '| optionText column | highlightMatches column',
            loading: "loading?'loading':"
        }, customTemplate),
        mixins: [data, methods, filters, computed, created],
        props: {
            columns: {
                type: Array,
                required: true
            },
            url: {
                type: String,
                required: true
            },
            options: {
                type: Object,
                required: false,
                default: function () {
                    return {}
                }
            }
        },
        created: function () {

            // merge options (pre-defined defaults, global and local)
            var defaults = require('./config/defaults')('server');
            this.options = this.initOptions(defaults, globalOptions, this.options);
            this.query = this.initQuery();

            if (this.options.compileTemplates)
                this.$on('vue-tables.loaded', function () {
                    this.compileTemplates();
                });

            this.initOrderBy(this.columns[0]);

            // set initial records per page
            this.limit = this.options.perPage;

            // request data for the first time
            this.getData().then(function (data) {

                var data = data.json();

                // initialize query as a string or an object depending on options.filterByColumn
                this.customQueries = this.initServerFilters();

                this.setData(data);
                this.loading = false;

                if (this.options.dateColumns.length) {
                    setTimeout(function () {
                        this.initDateFilters();
                    }.bind(this), 0);
                }

            }.bind(this));

        },
        ready: function () {

            this.registerServerFilters();

            if (this.options.dateColumns.length)
                this.initDateFilters();

            if (Object.keys(this.options.listColumns).length > 0) {
                this.initSelect2Filters();
            }

            var el = $(".select2-export-js");

            var select2Theme = this.options.css.select2theme;
            el.select2({
                placeholder: "",
                allowClear: true,
                theme: select2Theme
            });

            this.$on('vue-pagination::' + this.id, function (page) {
                this.setPage(page);
                this.getData().then(function (data) {
                    this.setData(data.json());
                }.bind(this));
            });
        },
        data: function () {
            return {
                source: 'server',
                data: [],
                loading: true,
                lastKeyStrokeAt: false
            }
        },

        methods: {
            refresh: require('./methods/refresh'),
            getData: require('./methods/get-data'),
            setData: require('./methods/set-data'),
            registerServerFilters: require('./methods/register-server-filters'),
            initServerFilters: require('./methods/init-server-filters')
        },
        computed: {
            totalPages: require('./computed/total-pages')
        }

    }

    Vue.component('v-server-table', server);

}


