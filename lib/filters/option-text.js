module.exports = function(value, column) {
  //.hasOwnProperty(value)
  if (!this.isMultiListFilter(column) || !this.isListFilter(column) && !this.listColumnsObject[column]){
    return value;
  }

  var object = this.listColumnsObject[column];
  if(!this.options.multiListColumns.hasOwnProperty(column) && object.hasOwnProperty(value)){
    return this.listColumnsObject[column][value]  + " B";
  }else if(!this.options.multiListColumns.hasOwnProperty(column) && !object.hasOwnProperty(value)){
    return value;
  }

  var list = "";
  value.forEach(function(item) {
    list += object[item] + "<br />";
  });

  return list;
};
