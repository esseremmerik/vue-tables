module.exports = function(column) {
    if (this.options.preFilter.hasOwnProperty(column)){
        return this.options.preFilter[column];
    }
    return '';
}

