import React, {
  Component
} from 'react'
import pageData from "./pageData.json";

class PagePart extends Component {
  //方法
  structureHtml() {
    let list = pageData.chooseReasons;
    let html = list.map(function(item, index) {
      let innerHtml = item.map(function(item2, index2) {
        return (
          <div className="text_center center" key={index2}>
            <div className="mx_auto icon font_size0">
              <i className="iconfont font_size70 color_orange" dangerouslySetInnerHTML={{__html: item2.icon || ''}}></i>
            </div>
            <p className="mt_25 mb_15 font_size32 color_4d font_bolder">{item2.title}</p>
            <p className="font_size16 color_4d line_height18" dangerouslySetInnerHTML={{__html: item2.describe || ''}}></p>
          </div>
        )
      })
      return (
        <div className="mx_auto flexbox space_around" style={{"width":'85%'}} key={index}>
          {innerHtml}
        </div>
      )
    })
    this.setState({
      listHtml: html
    })

  }
  constructor(props) {
    super(props);
    this.state = {
      listHtml: ''
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
      <div className="home_part_3">
        <h3 className="font_size46 color_4d font_bolder text_center" style={{"marginBottom":"5%"}}>我们的成绩</h3>
        <div className="content_wrap">
            {this.state.listHtml}
        </div>
      </div>
    );
  }
}

export default PagePart;