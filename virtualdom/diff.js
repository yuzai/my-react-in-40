function diff(oldtree,newtree){
  var patchs = {};
  var index = 0;
  dfs(oldtree,newtree,index,patchs);
  return patchs;
}

function dfs(oldtree,newtree,index,patchs){
  
}
