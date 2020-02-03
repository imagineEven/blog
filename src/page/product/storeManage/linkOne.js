import React, {
  Component
} from 'react'
import Auto from '../../../component/auth.js';
import BlockQuote from '../../../component/blockquote.js';
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
    this.state = {
      key: [
        {key: 'value', start: '', end: ''}
      ]
    };
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
          <div id="title">
            好文推荐：连接篇
          </div>
          <Auto createdTime="2020年2月2日"/>
          <p>我是陈学伟 这个是我的 我是陈学伟 <code id="flag">你是什么鬼</code>这个是我的 我是陈学伟 这个是我的 我是陈学伟 这个是我的 我是陈学伟 这个是我的 我是陈学伟 这个是我的 我是陈学伟 这个是我的 我是陈学伟 这个是我的 我是陈学伟 这个是我的</p>
          <p>第一篇文章</p>
          <p>第一篇文章 <strong>这是一个加粗字体</strong>，<a href="https://www.baidu.com/" target="_blank">这是一个连接</a>都挺好的</p>
          <div id="pre">
            <pre>
              <div>
                <pre>
                  {`//这个是注释
                  `}
                </pre>
              </div>
              {`.list {
                font-size: 12px; /伪装/
                background: red;
              }
              `}
            </pre>

            <pre>
            <span id="nihao" style={{"color": "green"}}>{`{`}</span>
            </pre>
          </div>
      
          <br/>
          nihao
          <br/>
          nihao
          <br/>
          <div id="title">一、css连接</div>
          <BlockQuote structureName="css"/>
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