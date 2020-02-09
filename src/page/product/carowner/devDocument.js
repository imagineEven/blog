import React, {
  Component
} from 'react'
import AlertQrcode from '../../../component/product/alertqrcode';

class DevDocument extends Component {
  //方法
  //弹出服务
  showAlert(type) {
    let html = (
      <AlertQrcode type={type} />
    )
    this.setState({
      alertHtml: html
    })
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
    this.state = {
  
    };
  }
  

  componentWillMount() {}
  componentDidMount() {
    document.title = "笔记开发文档";
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
      <div >
        我是几笔开发文档
      </div>
    );
  }
}

export default DevDocument;