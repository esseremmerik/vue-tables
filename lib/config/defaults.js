// Defaults are returned from a function to overcome caching issues which might cause data leakage between instances

module.exports = function (source) {
    return {
        dateColumns: [],
        listColumns: {},
        multiListColumns: {},
        datepickerOptions: {
            locale: {
                cancelLabel: 'Clear'
            }
        },
        perPage: 10,
        perPageValues: [10, 25, 50, 100],
        params: {},
        sortable: true,
        trackBy: '$index',
        filterable: false,
        customFilters: [],
        templates: {},
        compileTemplates: false,
        delay: 500,
        dateFormat: "DD/MM/YYYY",
        toMomentFormat: false,
        skin: "table-striped table-bordered table-hover",
        wrapperClasses: "",
        columnsDisplay: {},
        texts: {
            count: "{count} Records",
            filter: "Filter Results:",
            filterPlaceholder: "Search query",
            limit: "Records:",
            page: "Page:",
            noResults: "No matching records",
            filterBy: "Filter by {column}",
            loading: 'Loading...',
            defaultOption: 'Select {column}',
            export: "Export To",
            exportBtn: "Export",
            resultPerPage: "Results per page:",
            columns: "Columns"
        },
        sortIcon: {
            base: 'glyphicon',
            up: 'glyphicon-chevron-up is-asc',
            down: 'glyphicon-chevron-down is-desc'
        },
        onRowClick: function (row) {
        },
        changeColumns: function () {
        },
        exportData: function () {
        },
        export: {
            enable: false,
            postUrl: ""
        },
        filterByColumn: false,
        highlightMatches: false,
        orderBy: false,
        footerHeadings: false,
        headings: {},
        pagination: {
            dropdown: false,
            chunk: 10
        },
        css: {
            controlgroup: "col-lg-4",
            controlgroupShort: "col-lg-4",
            controlblock: "row",
            table: "table-striped",
            tableBlock: "",
            select2theme: "procademy"
        },
        preFilter: {}
    }
}