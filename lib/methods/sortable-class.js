module.exports = function(column) {

   var str = this.sortable(column)?'VueTables__sortable':'';

   if (!this.sortable(column))
      return str;

   if (column!=this.orderBy.column) return str + " lol";

   str += " is-sorted";

   return str;

}
