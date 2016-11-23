var merge = require('merge');

var requestedData = [];

module.exports = function () {
    var useCache = true;
    for (var key in this.query) {
        if(this.query[key] != ""){
            useCache = false;
        }
    };

    var hash = md5(JSON.stringify({
        limit: this.limit,
        orderBy: this.orderBy.column,
        ascending: this.orderBy.ascending,
    }));

    if(useCache){
        if(requestedData.hasOwnProperty(hash) && requestedData[hash].hasOwnProperty(this.page)){
            return requestedData[hash][this.page];
        }
    }

    var data = {
        query: this.query,
        limit: this.limit,
        orderBy: this.orderBy.column,
        ascending: this.orderBy.ascending,
        page: this.page,
        byColumn: this.options.filterByColumn ? 1 : 0
    };

    data = merge(data, this.options.params, this.customQueries);

    this.$dispatch('vue-tables.loading', data);


    var serverResponse = this.$http.get(this.url, {params: data});

    if(useCache){
        if(!requestedData.hasOwnProperty(hash)){
            requestedData[hash] = [];
        }
        requestedData[hash][this.page] = serverResponse
    }

    return serverResponse;
}
