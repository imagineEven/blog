import React, {
  Component
} from 'react'
import pageData from "./pageData.json";

class PagePart extends Component {
  //构造
  structureHtml() {
    let list = pageData.applyprocess;
    let html = [];
    list.map(function(item, index) {
      let part1 = (
        <div className="flexbox" key={index}>
          <div className="flex_0 px_10 center px_20 mb_30 vertical_flex_center">
            <i className="iconfont font_size36 color_80">&#xe666;</i>
          </div>
          <div className="flex_0 px_10 text_center mb_30" key={index}>
            <i className="iconfont font_size60 color_orange" dangerouslySetInnerHTML={{__html: item.icon || ''}}></i>
            <p className="mt_15 font_size22 color_80 font_lighter line_height15" dangerouslySetInnerHTML={{__html: item.describe || ''}}></p>
          </div>
        </div>)
      let part2 = (
        <div className="flexbox" key={index}>
          <div className="flex_0 px_10 text_center mb_30">
            <i className="iconfont font_size60 color_orange" dangerouslySetInnerHTML={{__html: item.icon || ''}}></i>
            <p className="mt_15 font_size22 color_80 font_lighter line_height15" dangerouslySetInnerHTML={{__html: item.describe || ''}}></p>
          </div>
        </div>)
      if (index !== 0) {
        html.push(part1);
      } else {
        html.push(part2);
      }
      return item;
    })
    this.setState({
      processHtml: html
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      processHtml: ''
    };
  }
  componentWillMount() {}
  componentDidMount() {
    this.structureHtml();
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
      <div className="page_part_3 py_80 background_f2">
        <div className="content_wrap">
          <h2 className="font_size50 color_4d text_center">申请流程</h2>
          <div className="mx_auto mt_100 mb_100 inner_content_wrap">
            <div className="mx_auto flexbox flex_wrap space_around">
              {this.state.processHtml}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;