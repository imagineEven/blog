import React, {
  Component
} from 'react';
// import {
//   Link
// } from 'react-router-dom';

class Author extends Component {
  //页面跳转
  navigateTo(el) {
    var href = el.currentTarget.getAttribute("href");
    if (!href) {
      alert("服务就快开放啦，敬请期待~");
      el.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {

    // console.log(this.props, "componentWillMount");
    // console.log(new Date().getTime())
  }
  componentDidMount() {
    let content = this.props.content
    this.setState({content});
    // console.log(this.state, "componentDidMount");
    // console.log(new Date().getTime())
  }
  componentWillReceiveProps() {
    //props更新
    //约1s 调用一次
  }
  componentWillUnmount() {
    //组件删除    
    return false
  }

  render() {
    return (
      <div id="preface-wrap">
        <div id="preface">前言</div>
        {this.state.content}
      </div>
    );
  }
}

export default Author;