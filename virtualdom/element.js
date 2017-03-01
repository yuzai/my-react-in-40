function element(tagname,props){
  console.log(arguments);
  var args = [].slice.call(arguments);
  return new _element(args[0],args[1],args.slice(2));
}
function _element(tagname,props,children){
  this.tagname = tagname;
  this.props = props;
  this.children = children;
  console.log(children);
}
element.prototype.render = function(){
  var el = document.createElement(this.tagname);
  var props = this.props;
  for(var key in props){
    el.setAttribute(key,props[key]);
  }
  var children = this.children||[];
  children.forEach(function(child){
    var childel = (child instanceof element)?child.render():document.createTextNode(child);
    el.appendChild(childel);
  })
  return el;
}
module.exports = element;
