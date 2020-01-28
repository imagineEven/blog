import React, {
  Component
} from 'react'
import $http from '../../../config/http.js';

class PagePart extends Component {
  //方法
  //构造招聘卡
  structureHtml(list) {
    let html = list.map(function(item, index) {
      let styleFloat = " float_left";
      if (index % 2 === 1) {
        styleFloat = " float_left";
      }
      let time = new Date(item.updateTime ? (item.updateTime.replace(/-/g, "/")) : item.createTime);
      let timeText = time.getFullYear() + "年" + (time.getMonth() + 1) + "月" + time.getDate() + '日';
      return (
        <div className={"mb_40 py_45 border_ job box_shadow_3" + styleFloat} key={index} style={{"width":'48%'}}>
          <h3 className="font_size28 color_orange text_center line_height15">{item.title}</h3>
          <h3 className="font_size28 color_orange text_center line_height15">{timeText}</h3>
          <div className="mt_30 px_35 font_size16 color_80 line_height20 clearfix text_justify">
            <div className="w_100 px_25 mb_60">
              <h4>岗位职责</h4>
              <ul dangerouslySetInnerHTML={{__html: item.workHtml || ''}}>
              </ul>
            </div>
            <div className="w_100 px_25">
              <h4>任职要求</h4>
              <ul dangerouslySetInnerHTML={{__html: item.descHtml || ''}}>
              </ul>
            </div>
          </div>
        </div>
      )
    })
    this.setState({
      jobHtml: html
    })

  }
  constructor(props) {
    super(props);
    this.state = {
      jobHtml: ''
    };
  }
  componentWillMount() {}
  componentDidMount() {
    let _this = this;
    $http.getRecruitList({}, function(Result) {
      if (Result.data && Result.data.length > 0) {
        _this.structureHtml(Result.data);
      }
    })
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
      <div className="page_part_3">
        <div className="mb_200">
          <div className="py_80 text_center">
            <h2 className="mb_25 font_size50 color_4d ">招聘岗位</h2>
          </div>
          <div className="content_wrap">
            <div className="mx_auto inner_content_wrap clearfix">{this.state.jobHtml}</div>          
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;