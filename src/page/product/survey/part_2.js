import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';


class PagePart extends Component {
  //方法
  newsList = []
  //构造新闻html
  structureHtml(list) {
    let _this = this;
    let html = list.map(function(item, index) {
      let time = (item.updateTime ? item.updateTime : item.createTime);
      let timeText = time.split(" ")[0];
      return (
        <React.Fragment key={index}>
        {/* <Link to={"/about/report/"+item.id} className="pointer" key={index}> */}
          <div className="mb_50 pb_30 border_b_d2 flexbox items_center">
            {/* 图片 */}
            {/* <div className="flex_0 mr_40 background_cover form_img" style={{"backgroundImage":('url('+item.iconUrl+')'),"height": "10em","width":"10em"}}>
            </div> */}
            <div className="flex_grow">
              <Link to={"/product/survey/"+item.id} className="pointer" key={index}>
                <div className="pb_10  color_4d line_height15" style={{"fontSize": "1.3em"}}>{item.title}</div>
              </Link>
              {/* <div className="border_b_d2" style={{"width":"30%"}}></div> */}
              <div className="pt_10 pb_20  color_80">{timeText}</div>
              <div className=" line_height15">{item.textContent}</div>
            </div>
            <div className="flex_0" style={{"marginLeft":"10%"}}>
              <i className="inline_block iconfont text_center color_orange border_xy_orange border_50 wh_40">&#xe681;</i>
            </div>
          </div>
        </React.Fragment>
      );
    })
    _this.setState({
      newsListHtml: html
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      newsListHtml: ''
    };
    this.newsList = props.data
  }
  componentWillMount() {}
  componentDidMount() {
    let list = this.newsList;
    this.structureHtml(list);
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
      <div className="page_part_2 pb_80">
        <div>
          <div className="mx_auto">
            {this.state.newsListHtml}
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;