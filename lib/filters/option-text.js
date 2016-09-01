module.exports = function(value, column) {
  if(typeof value != "object" || value == null){
    if(!this.isListFilter(column) || !this.listColumnsObject[column].hasOwnProperty(value)){
      return value;
    }

    return this.listColumnsObject[column][value];
  }

  var options = this.listColumnsObject[column];
  var list = "";
  if(typeof value == "number" || typeof value == "boolean"){
    return value;
  }

  value.forEach(function(item) {
    list += options[item] + "<br />";
  });

  return list;
}
