import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';

class Component_demo extends Component {
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
    console.log(this.props, "componentWillMount");
    console.log(new Date().getTime())
  }
  componentDidMount() {
    console.log(this.state, "componentDidMount");
    console.log(new Date().getTime())
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
      <div>
        <Link to="/home" onClick={(el) => this.navigateTo(el)} className="px+20 py_20 font_size20 color_4d pointer">首页</Link>
      </div>
    );
  }
}

export default Component_demo;