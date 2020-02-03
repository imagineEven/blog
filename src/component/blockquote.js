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

  cretedCssHtml() {
    let cssHtml = (
    <div id="pre">
      <pre>
        <div className="mb_5">
          <span className="selector">{`.box`}</span>
          <span className="punctuation">{`{`}</span>
        </div>
        <div className="mb_5">
          <span className="comment">{`//我是注释`}</span>
        </div>
        <div className="mb_5">
          <span className="property">{`display`}</span>
          <span className="punctuation">{`:`}</span>
          <span className="value">{`none`}</span>
          <span className="punctuation">{`;`}</span>
          <span className="comment">{`//我也是注释`}</span>
        </div>
      </pre>
    </div>
    )
    this.setState({
      html: cssHtml,
    })
  }

  createdListHtml() {
    let ListHtml = (
      <div id="pre">
        <ul>
          <li>我是li1</li>
          <li>我是li2</li>
        </ul>
      </div>
    )
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
    let structureName = this.props.structureName;
    if (structureName == 'css') {
      this.cretedCssHtml();
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