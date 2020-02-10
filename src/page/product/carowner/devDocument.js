import React, {
  Component
} from 'react'
import AlertQrcode from '../../../component/product/alertqrcode';
import Author from '../../../component/author.js';
import { containerData, authorData, blockData, prefaceData, flagData, cssData, cssJsonData } from './pageData.js';
import BlockQuote from '../../../component/blockquote.js';

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
      <div id="container">
        <div id="container-inner">
          <div id="title">
            笔记开发文档
          </div>
          <Author createdTime="2020年2月10日"/>
          <p>开发笔记结构</p>
          <BlockQuote structureName="" content={containerData}/>
          <p>高亮代码</p>
          <BlockQuote structureName="" content={flagData}/>
          <p>作者组件</p>
          <BlockQuote structureName="" content={authorData}/>
          <p>代码块组件</p>
          <BlockQuote structureName="" content={blockData}/>
          <p>前言组件</p>
          <BlockQuote structureName="" content={prefaceData}/>
          <p>css高亮数据结构</p>
          <BlockQuote structureName="" content={cssJsonData}/>
          <BlockQuote structureName="css" content={cssData}/>
        </div>
      </div>
    );
  }
}

export default DevDocument;