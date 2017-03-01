function ele(){
  var args = [].slice.call(arguments);
  return new _ele(args[0],args[1],args.slice(2));
}
function _ele(name,age,children){
  this.name = name;
  this.age = age;
  this.children = children;
}

var s = ele('xiaobo',23,ele('xiaohuan',22),ele('xiaoqi',18));
console.log(s);

function element(tagname,props){
  var args = [].slice.call(arguments);
  return new _element(args[0],args[1],args.slice(2));
}
function _element(tagname,props,children){
  this.tagname = tagname;
  this.props = props;
  this.children = children;
}
var test = element(
  "ul",
  { className: "list" },
  element(
    "li",
    null,
    "item 1"
  ),
  element(
    "li",
    null,
    "item 2"
  )
);
console.log(test);
