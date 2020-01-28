import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';

class PagePart extends Component {
  //方法
  newsList = [];
  newsId = 0;
  dealNewsList() {
    let _this = this;
    let detail = {},
      nextDetail = {},
      nextTittle = '下一篇';
    if (_this.newsId) {
      for (var i = 0; i < _this.newsList.length; i++) {
        let item = _this.newsList[i];
        if (item.id === Number(_this.newsId)) {
          detail = item;
          if (i + 1 === _this.newsList.length) {
            nextDetail = _this.newsList[i];
            nextTittle = '最后一篇';
          } else {
            nextDetail = _this.newsList[i + 1];
            nextTittle = '下一篇';
          }

        }
      }
      if (detail.id) {
        _this.structureNewsHtml(detail);
      }
    }
    if (nextDetail && nextDetail.id) {
      let time = (nextDetail.updateTime ? nextDetail.updateTime : nextDetail.createTime);
      let timeText = time.split(" ")[0];
      nextDetail.timeText = timeText;
      _this.setState({
        nextNews: nextDetail,
        nextTittle: nextTittle
      })
    }
  }
  //构造新闻html
  structureNewsHtml(detail) {
    let _this = this;
    let html = (
      <div className="w_100 my_60">
          <div  dangerouslySetInnerHTML={{__html: detail.htmlContent || ''}}></div>
        </div>
    );
    _this.setState({
      newsDetail: html
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      newsDetail: '',
      nextNews: {},
      nextTittle: '下一篇'
    };
    this.newsList = props.data;
    this.newsId = props.id;
  }
  componentWillMount() {}
  componentDidMount() {
    this.dealNewsList();
  }
  componentWillReceiveProps(nextProps) {
    //props更新
    //约1s 调用一次
    this.newsList = nextProps.data;
    this.newsId = nextProps.id;
    this.dealNewsList();
  }
  componentWillUnmount() {
    //组件删除    
    return false
  }

  render() {
    return (
      <div className="page_part_3 pb_80">
        <div className="content_wrap">
          <div className="mx_auto inner_content_wrap clearfix about_news_detail">
            <div className="next_nav my_60 float_right">
              <Link to={"/about/report/"+this.state.nextNews.id} className="block px_20 py_20 mb_20 border_xy_d2 next">
                <h5 className="font_size20 color_666 pointer">{this.state.nextTittle}</h5>
                <hr className="mt_20 mb_15 w_10 ml_0"/>
                <p className="font_size18 color_4d line_height20 pointer mb_40">{this.state.nextNews.title}</p>
                <p className="font_size12 color_80 pointer ">{this.state.nextNews.timeText}</p>
              </Link>
              <Link to="/about/report">
                <button type="button" className="noappearance btn_orange w_100 py_15 text_center font_size16 color_fff">阅读更多报道，点击这里</button>
              </Link>
            </div>
            <div className="detail">
              {this.state.newsDetail}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;