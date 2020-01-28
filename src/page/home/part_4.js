import React, {
  Component
} from 'react';
import pageData from "./pageData.json";

class PagePart extends Component {
  //方法
  structureHtml() {
    let list = pageData.partners;
    let html = list.map(function(item, index) {
      let img = require("../../" + item.imgUrl);
      return (
        <div className="w_20 mb_60 float_left overflow_hidden" key={index}>
          <img className="w_100" src={img} alt="yilutong,壹路通" draggable="false"/>
        </div>
      )
    })
    this.setState({
      partnerHtml: html
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      partnerHtml: ''
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
      <div className="vw_100">
        <div className="home_part_4">
          <h3 className="font_size46 color_4d font_bolder text_center" style={{"marginBottom":"8%"}}>壹路通大家庭</h3>
          <div className="content_wrap">
            <div className="mx_auto clearfix noselect" style={{"width":'80%'}}>{this.state.partnerHtml}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;