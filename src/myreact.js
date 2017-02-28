function createDOMFromString(domString){
  var div = document.createElement('div');
  div.innerHTML = domString;
  return div;
}

var mount = function(wrapper,component){
  wrapper.appendChild(component.renderDOM());
  component.onStateChange = function(oldel,newel){
    wrapper.insertBefore(newel,oldel);
    wrapper.removeChild(oldel);
  }
}

class myreact{
  constructor(props={}){
    this.props = props;
  }
  setState(state){
    var oldel  = this.el;
    this.state = state;
    this.el = this.renderDOM();
    if(this.onStateChange){
      this.onStateChange(oldel,this.el);
    }
  }
  renderDOM(){
    this.el = createDOMFromString(this.render());
    if(this.onClick){
      this.el.addEventListener('click',this.onClick.bind(this),false);
    }
    return this.el;
  }
}

export {mount}
export default myreact;
