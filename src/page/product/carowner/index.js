import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CommonHeader from '@/component/header';
import CommonFooter from '@/component/footer';
// import Features from '../../../component/product/features';
// import ServiceType from '../../../component/product/servicetype';
import AlertQrcode from '../../../component/product/alertqrcode';
// import Part1 from './part_1';
// import Part2 from './part_2';
import pageData from "./pageData.json";
import * as data from "./pageData.js"

class Service extends Component {
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
      features: pageData.features,
      servicetype: pageData.servicetype,
      alertHtml: '',
      blogHtml: '',
      // 下面是真正需要的代码
      classifyType: null,
      notesHtml: '',
    };
  }
  
  openNewView() {
    window.open(`${window.location.host}/#/product/devDocument`)
  }

  changeClassify(type) {
    if(type === 0) {
      this.createdcType0();
    } else {
      this.createdcType1();
    }
    this.setState({classifyType:type},() => {
      // console.log('classify', this.state.classifyType);
    });
  }

  componentWillMount() {
    this.createdcType0();
  }
  componentDidMount() {
    document.title = "日记";
  }
  componentWillReceiveProps() {
    //props更新
    //约1s 调用一次
  }
  componentWillUnmount() {
    //组件删除    
    return false
  }

  // 年份日记篇
  createdcType0() {
    let html = (
      <div className="type0-wrapper">
        {data.notesType0.map((item,index) => (
          <React.Fragment key={index}>
            <h3>{item.time}</h3>
            {item.content.map((note, noteIndex) => (
                <div className="li" key={noteIndex}>
                  <span className="circular"></span>
                  <Link to={{pathname:"/public/notes", query:{data:note}}}>
                    <span>{note.title}</span>
                    <span className="notes">{`(${note.end})`}</span>
                  </Link>
                </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    )
    this.setState({notesHtml: html})
  }

  // 分类日记篇
  createdcType1() {
    let html = (
      <div className="type0-wrapper">
        <h3>我的爱好</h3>
      </div>
    )
    this.setState({notesHtml: html})
  }


  render() {
    return (
      <div>
        <CommonHeader model="2"  position="1" />
        <div id="container">
          <div id="container-inner">

            {/* 头部信息 */}
            <div id="title">日记篇</div>
            <div id="preface-wrap" onClick={this.openNewView.bind(this)}>
              <div>
                {/* <a href={window.location.host + '/#/product/DevOps'} target="_blank">笔记开发文档</a> */}
                笔记开发文档
              </div>
            </div>

            {/* 0日记、1分类进行切换 */}
            <div className="flexbox pt_5 border_b_d2 classify-wrapper">
              <div className={"border_xy_d2  py_5 px_10" + (this.state.classifyType ? '' : ' active')} 
                onClick={this.changeClassify.bind(this, 0)}>
                日记
              </div>
              <div className={"border_xy_d2  py_5 px_10" + (this.state.classifyType ? ' active' : '')} 
                onClick={this.changeClassify.bind(this, 1)}>
                分类
              </div>
            </div>

            {/* 笔记内容区域 */}
            {this.state.notesHtml}
          </div>
        </div>
        <CommonFooter />
        {this.state.alertHtml}
      </div>
    );
  }
}

export default Service;