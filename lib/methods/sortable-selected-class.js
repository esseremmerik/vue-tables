module.exports = function(column) {

   var cls = this.options.sortIcon.base + ' ';

   if (!this.sortable(column))
      return;

   if (column!=this.orderBy.column) return cls;

   return " is-sorted";
}
