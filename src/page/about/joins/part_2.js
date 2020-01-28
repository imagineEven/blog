import React, {
  Component
} from 'react'
import pageData from "./pageData.json";

class PagePart extends Component {
  //构造
  structureHtml() {
    let list = pageData.features.list;
    let html = list.map(function(item, index) {
      let part = (
        <div className="w_33 flex_0 px_10" key={index}>
          <i className="iconfont font_size26 color_orange mr_5" dangerouslySetInnerHTML={{__html: item.icon || ''}}></i>
          <p className="inline_block mt_15 font_size26 color_80 font_lighter font_lighter line_height15" dangerouslySetInnerHTML={{__html: item.title || ''}}></p>
        </div>)
      return part;
    })
    this.setState({
      featuresHtml: html
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      featuresHtml: ''
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
      <div className="page_part_3 py_80">
        <div className="content_wrap" style={{"paddingRight":"600px"}}>
          <h2 className="font_size50 color_4d text_center">我们为您提供</h2>
          <div className="mx_auto mt_100 mb_100 inner_content_wrap">
            <div className="mx_auto flexbox flex_wrap">
              {this.state.featuresHtml}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;