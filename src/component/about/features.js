import React, {
  Component
} from 'react';

class Features extends Component {
  //方法
  structureHtml() {
    let list = this.state.listData;
    let part_w = (100 / list.length) + "%";
    let html = list.map(function(item, index) {
      return (
        <div className="flex_grow px_25 text_center" key={index} style={{"width":part_w}}>
          <i className="iconfont font_size60 color_orange" dangerouslySetInnerHTML={{__html: item.icon || ''}}></i>
          <h4 className="mt_30 mb_10 font_size32 color_4d">{item.title || ''}</h4>
          <p className="font_size22 color_80 font_lighter line_height15 line_wrap text_justify" dangerouslySetInnerHTML={{__html: item.describe || ''}}></p>
        </div>
      )
    })
    this.setState({
      listHtml: html
    })
  }
  //页面跳转
  navigateTo(el) {
    var href = el.currentTarget.getAttribute("href");
    if (!href) {
      alert("服务就快开放啦，敬请期待~");
      el.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  constructor(props) {
    super(props);
    let featuresData = props.data;
    this.state = {
      listData: featuresData.list,
      title: featuresData.title,
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
      <div className="page_part_2 mt_60 mb_100">
        <div className="content_wrap">
          <h2 className="font_size50 color_4d text_center">{this.state.title}</h2>
          <div className="mx_auto mt_100 mb_100 inner_content_wrap">
            <div className="flexbox">         
              {this.state.listHtml}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;