import React, {
  Component
} from 'react';
// import {
//   Link
// } from 'react-router-dom';
import Author from '../../component/author.js';
import Preface from '../../component/Even/preface.js';

class Notes extends Component {
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
    // console.log('props', props)
    this.state = {data: props.location.query.data};
    console.log('state', this.state)

  }
  componentWillMount() {}
  componentDidMount() {
    let content = this.props.content
    this.setState({content});
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
      <div id="notes-wrap">
        <div id="container">
          <div id="container-inner">

            <div id="title">
              {this.state.data.notes.header}
            </div>

            <Author createdTime={this.state.data.end}/>

            <Preface content={this.state.data.notes.preface}/>

            <p>内容区域1</p>
            <p>内容区域2</p>

          </div>
        </div>
      </div>
    );
  }
}

export default Notes;