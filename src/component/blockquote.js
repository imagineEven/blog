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

  // xuexi react空标签 <React.Fragment >
  
  cretedCssHtml(content) {
    let cssHtml = (
    <div id="pre">
      <pre>
        <div className="mb_5">
          <span className="selector">{content[0].selector}</span>
          <span className="punctuation">{`{`}</span>
        </div>
        {content.map((item, index) => {
          return (
            <React.Fragment key={index}>
            <div className="mb_5">
              <span className="comment">{item.start}</span>
            </div>
            <div className="mb_5">
              <span className="property">{item.key}</span>
              <span className="punctuation">{`:`}</span>
              <span className="value">{item.value}</span>
              <span className="punctuation">{`;`}</span>
              <span className="comment">{item.end}</span>
            </div>
          </React.Fragment>
          )
        })}
        <div className="mb_5">
          <span className="punctuation">{`}`}</span>
        </div>
      </pre>
    </div>
    )
    this.setState({
      html: cssHtml,
    })
  }

  createdJsHtml() {
    let JsHtml = (
      <div id="pre">
        <pre>

        </pre>
      </div>
    )
  }

  createdListHtml() {
    let ListHtml = (
      <div id="pre">
        <pre>
          <ul>
            <li className="mb_5"><span className="mr_5">·</span>我是li1</li>
            <li className="mb5"><span className="mr_5">·</span>我是li2</li>
          </ul>
        </pre>
      </div>
    )
    this.setState({
      html: ListHtml,
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      html: '',
    };
  }
  componentWillMount() {
    // console.log('this.props+componentWillMount',this.props.structureName);
    // console.log(this.props, "componentWillMount");
    // console.log(new Date().getTime())
  }
  componentDidMount() {
    console.log('this.props+componentDidMount',this.props.structureName);
    console.log('this.props.content+componentDidMount',this.props.content);

    let structureName = this.props.structureName;
    let content = this.props.content;
    if (structureName == 'css') {
      this.cretedCssHtml(content);
    } else if (structureName == 'list') {
      this.createdListHtml();
    }
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
      <div className="blockquote-wrap">
        {this.state.html}
      </div>
    );
  }
}

export default Auth;