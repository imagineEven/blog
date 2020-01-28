import React, {
  Component
} from 'react'

class PagePart extends Component {
  //方法
  //显示alert
  showAlert(type) {
    this.props.showQrcodeAlert(type);
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
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {}
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
      <div className="page_part_1">
        <div className="flexbox page_title_part type2" style={{'backgroundImage':('url('+require("../../../images/banner/top_banner17.jpg")+')')}}>
          <div className="content_wrap">
            <h1 className="mb_15 font_size55 color_fff">智能车队管理</h1>
            <h2 className="font_size35 mb_20 color_fff line_height12 industry_h2">车辆、人员、财务管理轻松掌控</h2>
            <button className="noappearance px_15 py_5 btn_orange font_size22 border_radius_4" onClick={this.showAlert.bind(this,1)}>
              <i className="iconfont font_size22 mr_5">&#xe634;</i>
              <span>点击下载APP</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;