import React, {
  Component
} from 'react'
import Author from '../../../component/author.js';
// import BlockQuote from '../../../component/blockquote.js';
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
      html: '',
    };
  }
  componentWillMount() {}
  componentDidMount() {
    this.createdHtml()
  }
  createdHtml() {
    let html = data.linksName.map((item, index) => {
      return(
        <React.Fragment key={index}>
          <h3 className={item.categoryEnglish}>{item.category}</h3>
          {data.links[index].map((linksItem, linkIndex) => {
            return(
              <li className="li" key={linkIndex}>
                <span className="circular"></span>
                <a rel="noopener noreferrer" href={linksItem.href} target="_blank">{linksItem.title}</a>
                <span className="notes">{`(${linksItem.notes})`}</span>
              </li>
            )
          })}
        </React.Fragment>
      )
    })
    this.setState({html})
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
            好文推荐：连接篇
          </div>
          <Author createdTime="2020年2月2日"/>
          <Preface content={data.preface}/>
          {this.state.html}
        </div>
      </div>
    );
  }
}

export default PagePart;