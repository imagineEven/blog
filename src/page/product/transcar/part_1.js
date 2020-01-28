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
        <div className="flexbox page_title_part type2" style={{'backgroundImage':('url('+require("../../../images/banner/top_banner16.jpg")+')')}}>
          <div className="content_wrap">
            <h1 className="mb_15 font_size55 color_fff">智能化整车驳运</h1>
            <h2 className="font_size35 mb_20 color_fff line_height12 industry_h2">高效便捷、安全透明的整车物流服务</h2>
            <div className="mobileHide">
              <button className="noappearance px_15 py_5 btn_orange font_size18 border_radius_4" >
                <i className="iconfont font_size18 mr_5">&#xe633;</i>
                <span>我要运车</span>
              </button>
            </div>
            <div className="hide mobileShow clearfix pinter" onClick={this.showAlert.bind(this,4)}>
              <img className="border_50 float_left mr_10" src={require("../../../images/ylt_byt_qrcode.jpg")} alt="壹路通,yilutong" style={{"width":"54px"}}/>
              <p className="pt_15 font_size10 color_fff vertical_middle line_height12">识别二维码<br/>立即运车</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;