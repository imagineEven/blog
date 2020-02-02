import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';

class Auth extends Component {
  //方法

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
    let time = this.props.createdTime
    this.setState({time});
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
      <div className="auth-wrap">
        <p>作者: <Link to="/home">Even</Link></p>
        <p>日期: {this.state.time}</p>
      </div>
    );
  }
}

export default Auth;