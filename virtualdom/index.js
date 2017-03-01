/** @jsx element */

import element from './element2';

function createNode(node){
  if(typeof node === 'string'){
    return document.createTextNode(node);
  }
  var $el = document.createElement(node.type);
  var _node = node.children.map(function(item,index){
       return createNode(item);
     })
     .forEach(function(item){
       $el.appendChild(item);
     })
  return $el;
}

function updateElement($parent,newNode,oldNode,index){
  //没有旧节点
  if(!oldNode){
      $parent.appendChild(createNode(newNode));
  }else if(!newNode){
    //没有新节点
    $parent.removeChild($parent.childNodes[index]);
  }else if(changed(newNode,oldNode)){
    $parent.replaceChild(createNode(newNode),$parent.childNodes[index])
  }else if(newNode.type){
    var l1 = newNode.children.length;
    var l2 = newNode.children.length;
    var l = l1>l2?l1:l2;
    for(var i=0;i<l;i++){
      updateElement(
        $parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      )
    }
  }
}

function changed(node1,node2){
  return typeof node1 !== typeof node2||
         typeof node1 === 'string' && node1 !== node2 ||
         node1.type !== node2.type;
}

var test = (
  <ul class="list">
    <li>item 1</li>
    <li>item 2</li>
  </ul>
);

var test2 = (
  <ul class="list">
    <li>item 4</li>
    <li>item 5</li>
    <ul>
      <li>item 5</li>
      <ul class="list">
        <li>item 1</li>
        <li>item 2</li>
        <ul class="list">
          <li>item 1</li>
          <li>item 2</li>
        </ul>
      </ul>
    </ul>
    <li>item 1</li>
  </ul>
)
var $root = document.getElementById('app');
$root.appendChild(createNode(test));

updateElement($root,test2,test,0);
