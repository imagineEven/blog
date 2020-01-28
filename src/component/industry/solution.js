import React, {
  Component
} from 'react'

import {
  Link
} from 'react-router-dom';
class Solution extends Component {
  //方法
  //构造解决方案html
  structureSolutionHtml(list) {
    let _this = this;
    let html = list.map(function(item, index) {
      let innerHtml = item.map(function(item2, index2) {
        let redirect = '';
        if (item2.redirectUrl) {
          redirect = (
            <Link to={(item2.redirectUrl)} className="font_size18 color_orange pointer line_nowrap">{item2.redirectName?item2.redirectName:"点击了解"} ></Link>
          )
        }
        let solution_banner = require(("../../" + item2.image));
        return (
          <div className="w_50 px_25 mb_80 relative part" key={index2}>
            <img className="w_100" src={solution_banner} alt="yilutong,壹路通"/>
            <h3 className="mt_40 mb_25 font_size28 color_4d">{item2.title}</h3>
            <p className="mb_50 font_size18 color_80 font_lighter line_height15">{item2.describe} {redirect}</p>            
          </div>
        );
      })
      return (
        <div className="flexbox" key={index}>
          {innerHtml}
        </div>
      )
    })
    _this.setState({
      listHtml: html
    })
  };
  constructor(props) {
    super(props);
    this.state = {
      listData: props.data,
      listHtml: [],
    };
  }
  componentWillMount() {}
  componentDidMount() {
    let listData = this.state.listData;
    this.structureSolutionHtml(listData);
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
      <div className="mx_auto clearfix industry_solution_wrap">
        {this.state.listHtml}
      </div>
    );
  }
}

export default Solution;