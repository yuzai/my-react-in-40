import style from './style.scss';

const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
  }

class LikeButton {
    constructor(){
      this.state = {
        islike:true
      }
    }
    setState(state){
      this.state = state;
      const oldEl = this.el;
      this.el = this.render();
      if(this.onStateChange){
        this.onStateChange(oldEl, this.el)
      }
    }
    changeText(){
      this.setState({
        islike:!this.state.islike
      });
    }
    render() {
      this.el = createDOMFromString(`
          <button class='like-btn'>
            <span class='like-text'>${this.state.islike?'点赞':'取消'}</span>
            <span>👍</span>
          </button>
          `);
      this.el.addEventListener('click',()=>{
        this.changeText();
      },false);
      return this.el;
    }
}
var wrapper = document.querySelector('#app');
const btn1 = new LikeButton();
wrapper.appendChild(btn1.render());
btn1.onStateChange = (oldel,newel)=>{
  wrapper.insertBefore(newel,oldel);
  wrapper.removeChild(oldel);
}
const btn2 = new LikeButton();
wrapper.appendChild(btn2.render());
btn2.onStateChange = (oldel,newel)=>{
  wrapper.insertBefore(newel,oldel);
  wrapper.removeChild(oldel);
}
