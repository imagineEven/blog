import React, {
  Component
} from 'react';
// import {
//   Link
// } from 'react-router-dom';
import Author from '../../component/author.js';
import Preface from '../../component/Even/preface.js';
import * as allData from '@/page/product/carowner/pageData.js';
import CommonHeader from '@/component/header';
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
    // 通过点击获取数据
    // let data = props.location.query.data;
    // 先把数据写死
    let data = allData.notesType0[0].content[0];
    this.state = {
      data: data,
      content: data.notes.content,
    };
    // console.log('state', this.state)

  }
  componentWillMount() {}
  componentDidMount() {
    // let content = this.props.content
    // this.setState({content});
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
        <CommonHeader model="2"  position="1" />
        <div id="container">
          <div id="container-inner">

            <div id="title">
              {this.state.data.notes.header}
            </div>

            <Author createdTime={this.state.data.end}/>

            <Preface content={this.state.data.notes.preface}/>
              {
                this.state.content.map((item, index) => (
                  <div className="" key={index}>
                    {item.startImage? <img className="noteImage" src={item.startImage}></img> : ''}
                    <p>{item.text}</p>
                    {item.endImage? <img className="noteImage" src={item.endImage}></img> : ''}
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;