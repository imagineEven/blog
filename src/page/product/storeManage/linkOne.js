import React, {
  Component
} from 'react'
import Author from '../../../component/author.js';
import BlockQuote from '../../../component/blockquote.js';
import Preface from '../../../component/Even/preface.js';
import * as data from './pageData.js';
// import commonFn from '../../../config/common.js';

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
      css:{
        'box':[
          {selector: '.box1', key: 'display', value: 'none', start: '//我是第一个注释', end: '/#/我是第二个注释'},
          {selector: '.box1',key: 'font-size', value: '12px', start: '字体属性', end: '/字体值/'},
        ]
      },
      html: `
<--!html笔记 -->
<div id="title">
  笔记开发文档
</div>`
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
          <Author createdTime="2020年2月2日"/>
          <Preface content={data.preface}/>
          
          <p>第一个博客，想了很久css代码块该怎么展示才能让读者看的更舒服美观，
            也借鉴了阮一峰大神的博客样式表，才有了现在的灵感，
            自己封装的组件感觉还是比较繁琐，先对付着用吧，
            后面如果想到简化版的在去更新，还是要给自己写一个关于样式表组件的使用说明，
            一是为了怕自己鱼的记忆，还要翻原来的代码一点点的看，
            二是博客确实需要花费很大的时间和经历，所以也是留给以后的自己在续写博客的时候方便一些。
            确实随着年龄的增长记忆是越来越差了。
          </p>
          {/* <p>第一篇文章 <strong>这是一个加粗字体</strong>，<a href="https://www.baidu.com/" target="_blank">这是一个连接</a>都挺好的</p> */}
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
          <BlockQuote structureName="css" content={this.state.css.box}/>
          nihao
          <br/>
          nihao
          <BlockQuote structureName="" content={this.state.html}/>
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