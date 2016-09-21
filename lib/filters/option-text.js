module.exports = function(value, column) {
  if (!this.isListFilter(column) || !this.listColumnsObject[column]){
    if(!this.isMultiListFilter(column)){
      return value;
    }
  }

  var object = this.listColumnsObject[column];
  if(!this.options.multiListColumns.hasOwnProperty(column) && object.hasOwnProperty(value)){
    return this.listColumnsObject[column][value];
  }else if(!this.options.multiListColumns.hasOwnProperty(column) && !object.hasOwnProperty(value)){
    return value;
  }

  var list = "";
  console.log("Hello World!");

  console.log(value);
  value.forEach(function(item) {
    list += object[item] + "<br />";
  });

  return list; //JSON.stringify(value); //JSON.stringify(object);
};
