import myreact from './myreact';
import {mount} from './myreact'

export default class LikeButton extends myreact{
  constructor(props){
    super(props);
    this.state = {
      islike:true
    };
  }
  onClick(){
    this.setState({
      islike:!this.state.islike
    })
  }
  render(){
    return `
      <button class='like-btn'>
        <span class='like-text'>${this.props.word || ''} ${this.state.islike ? '取消' : '点赞'}</span>
        <span>👍</span>
      </button>
    `
  }
}
var wrapper = document.querySelector('#app');
mount(wrapper,new LikeButton({word:'hello'}));
