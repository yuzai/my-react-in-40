var el = require('./element');
var ul = el('ul',{id:'list'},[
  el('li',{class:'item'},['Item 1']),
  el('li',{class:'item'},['Item 2']),
  el('li',{class:'item'},['Item 3'])
]);
var el = ul.render();
var wrapper = document.getElementById('#app');

wrapper.appendchild(el);
