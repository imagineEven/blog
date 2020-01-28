import React, {
  Component
} from 'react';
import Features from '../../../component/about/features';
import pageData from "./pageData.json";

class PagePart extends Component {

  //方法

  structureActivityContentHtml() {
    let list = pageData.activity.list;
    let part_w = (100 / list.length) + "%";
    let innerHtml1 = [];
    let innerHtml2 = [];
    list.map(function(item, index) {
      let activity_img = require("../../../" + item.image);
      let dom_img = (
        <div className="flex_grow text_center" style={{"width":part_w}} key={index}>
            <img className="w_100" src={activity_img} alt="yilutong,壹路通"/>
          </div>
      )
      let dom_text = (
        <div className="flex_grow text_center" style={{"width":part_w}} key={index}>
            <h4 className="mt_30 mb_20 font_size28 color_4d">{item.title || ''}</h4>
            <p className="font_size22 color_80 line_height15 line_wrap" dangerouslySetInnerHTML={{__html: item.describe || ''}}></p>
          </div>
      )
      if (index % 2 === 0) {
        innerHtml1.push(dom_img);
        innerHtml2.push(dom_text);
      } else {
        innerHtml1.push(dom_text);
        innerHtml2.push(dom_img);
      }
      return true;
    })
    let html_wrap = (
      <div className=" box_shadow_2">
        <div className="flexbox items_center">
          {innerHtml1}
        </div>
        <div className="flexbox items_center">
          {innerHtml2}
        </div>
      </div>
    )
    this.setState({
      activityContent: html_wrap
    })
  }

  constructor(props) {
    super(props);
    let activityContent = (
      <img className="w_100 px_30" src={require("../../../images/about/recruit_show_fuli.jpg")} alt="yilutong,壹路通"/>
    )
    this.state = {
      features: pageData.features,
      activity: pageData.activity,
      activityContent: activityContent,
    };
  }
  componentWillMount() {}
  componentDidMount() {
    // this.structureActivityContentHtml();
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
      <div className="page_part_2">
        <div className="mb_200">
          <div className="py_80 text_center">
            <h2 className="mb_25 font_size50 color_4d ">{this.state.activity.title}</h2>
            <p className="font_size22 color_80 line_height15 font_lighter" dangerouslySetInnerHTML={{__html: this.state.activity.describe || ''}}></p>
          </div>
          <div className="content_wrap">
            <div className="mx_auto inner_content_wrap">{this.state.activityContent}</div>          
          </div>
        </div>
        <div className="py_5 background_fc">
          <Features data={this.state.features}/>
        </div>
      </div>
    );
  }
}

export default PagePart;