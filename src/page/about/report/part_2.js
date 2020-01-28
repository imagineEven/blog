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
        <Link to={"/about/report/"+item.id} className="pointer" key={index}>
          <div className="py_60 flexbox items_center border_b_d2" >
            <div className="flex_0 mr_60 background_cover form_img" style={{"backgroundImage":('url('+item.iconUrl+")")}}>
            </div>
            <div className="flex_grow">
              <h3 className="pb_10 font_size24 color_4d line_height15">{item.title}</h3>
              <div className="border_b_d2" style={{"width":"30%"}}></div>
              <p className="pt_10 pb_20 font_size16 color_80">{timeText}</p>
              <div className="font_size16 color_80 line_height15">{item.textContent}</div>
            </div>
            <div className="flex_0" style={{"marginLeft":"10%"}}>
              <i className="inline_block iconfont text_center font_size25 color_orange border_xy_orange border_50 wh_40">&#xe681;</i>
            </div>
          </div>
        </Link>
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
        <div className="content_wrap">
          <div className="mx_auto inner_content_wrap news_wrap">
            {this.state.newsListHtml}
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;