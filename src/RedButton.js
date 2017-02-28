import myreact from './myreact';
import {mount} from './myreact';

export default class RedButton extends myreact{
  constructor(props){
    super(props);
    this.state = {
      color:'blue'
    }
  }
  onClick(){
    if(this.state.color==='red'){
      this.setState({
        color:'blue'
      })
    }else {
      this.setState({
        color:'red'
      })
    }
  }
  render(){
    return `
      <div style='color:${this.state.color}'>${this.state.color}</div>
    `
  }
}
var wrapper = document.querySelector('#app');
mount(wrapper,new RedButton());
