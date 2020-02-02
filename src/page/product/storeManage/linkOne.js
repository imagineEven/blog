import React, {
  Component
} from 'react'

class PagePart extends Component {
  //方法
  //显示alert
  showAlert(type) {
    this.props.showQrcodeAlert(type);
  }

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
  componentWillMount() {}
  componentDidMount() {}
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
      <div id="container">
        <div id="container-inner">
          <div id="header">
            <h1>网络分享连接</h1>
          </div>
          nihao
          <br/>
          nihao
          <br/>
          nihao
          <br/>
          nihao
          <br/>
          nihao
          <br/>
          nihao
          <br/>
          nihao
          <br/>
          nihao
          <br/>
        </div>
      </div>
    );
  }
}

export default PagePart;