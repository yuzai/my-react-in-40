import style from './style.scss';
import LikeButton from './LikeButton';
import RedButton from './RedButton';
function createDOMFromString(domString){
  var div = document.createElement('div');
  div.innerHTML = domString;
  return div;
}

var LikeButtom = function(){
  this.state = {
    islike:true
  };
}
LikeButtom.prototype.setState = function(state){
  this.state = state;
  var oldel = this.el;
  this.el = this.render();
  if(this.onStateChange){
    this.onStateChange(oldel,this.el);
  }
}
LikeButtom.prototype.changeText = function(){
  this.setState({
    islike:!this.state.islike
  });
}
LikeButtom.prototype.render = function(){
  var str = "<button class='like-btn'><span class='like-text'>"+
  (this.state.islike?'点赞':'取消')+"</span><span>👍</span></button>";
  this.el = createDOMFromString(str);
  var self = this;
  this.el.addEventListener('click',function(){
    self.changeText();
  },false);
  return this.el;
}

var wrapper = document.querySelector('#app');
var btn1 = new LikeButtom();
wrapper.appendChild(btn1.render());
btn1.onStateChange = function(oldel,newel){
  wrapper.insertBefore(newel,oldel);
  wrapper.removeChild(oldel);
}
var btn2 = new LikeButtom();
wrapper.appendChild(btn2.render());
btn2.onStateChange = function(oldel,newel){
  wrapper.insertBefore(newel,oldel);
  wrapper.removeChild(oldel);
}
