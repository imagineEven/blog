import React, { Component } from 'react'
import * as data from "./pageData.js"
import Author from '@/component/author.js';
import BlockQuote from '@/component/blockquote.js';
class PagePart extends Component {
  //方法
  constructor(props) {
    super(props);
    this.state = {
      data:data.part3[0],
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
      <div className="page_part_3">
        <div id="container-inner">
          <div id="title">{this.state.data.title}</div>
          <Author createdTime="2020年规划目标"/>
          <div className="month-wrap border_xy_orange border_radius_6 my_20">
            <h3>2020.03</h3>
            <div className=" background_c2 border_radius_4 border_xy_d2 px_10 py_10 my_20 mx_20">
              <p>2020-03-22</p>
              <BlockQuote structureName="" content="我的个人规划"/>
            </div>
            <div className="background_c2 border_radius_4 border_xy_d2 px_10 py_10 my_20 mx_20">
              <p>2020-03-23</p>
              <BlockQuote structureName="" content="我的个人规划"/>
            </div>
          </div>
 
        </div>
      </div>
    );
  }
}

export default PagePart;