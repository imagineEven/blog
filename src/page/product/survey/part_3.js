import React, { Component } from 'react'
import * as data from "./pageData.js"
import Author from '@/component/author.js';
import BlockQuote from '@/component/blockquote.js';
class PagePart extends Component {
  //方法
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
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

  createdDayContent(content) {
    return (
      content.map((contentItem,index) => (
        <div key={index} className=" background_c2 border_radius_4 border_xy_d2 px_10 py_10 my_20 mx_20">
          <p>{contentItem.time}</p>
          <BlockQuote structureName="" content={contentItem.content}/>
        </div> 
      ))

    )
  }

  createMonthContent() {
    return (
      this.state.data.month.map((item, index) =>(
        <div key={index} className="month-wrap border_xy_orange border_radius_6 my_20">
          <h3>{item.time}</h3>
          {this.createdDayContent(item.content)}
        </div>
      ))
    )
  }

  render() {
    return (
      <div className="page_part_3">
        <div id="container-inner">
          <div id="title">{this.state.data.title}</div>
          <Author createdTime="2020年后规划目标"/>
          {this.createMonthContent()}
        </div>
      </div>
    );
  }
}

export default PagePart;