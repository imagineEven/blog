import React, {
  Component
} from 'react';
import ServiceDis from '../../../component/product/servicedis';
import pageData from "./pageData.json";


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
    this.state = {
      disData: pageData.servicedis,
      alertHtml: ''
    };
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
      <div className="page_part_2 background_fc">
        <div className="py_80 text_center scrollify_anchor_point">
          <h2 className="mb_25 font_size50 color_4d ">服务流程</h2>
          <p className="font_size22 color_80 font_lighter line_height15">线上下单，线下体验，服务全流程可见可追溯</p>
        </div>
        <div className="content_wrap pt_40 pb_80 scrollify_anchor_point">
          <div className="mx_auto inner_content_wrap">
            <div className="flexbox items_center product_service_part">
              <div className="w_50 text_center">
                <img className="w_100 max_img" src={require("../../../images/product/service_disc2.png")} alt="yilutong,壹路通"/>
                <div className="clearfix">
                  <div className="w_50 text_center float_left">                    
                    <p className="mb_10 font_size20 color_80">车主端</p>
                    <button className="noappearance px_15 py_5 btn_orange font_size16 border_radius_4" onClick={this.showAlert.bind(this,2)}>
                      <i className="iconfont mr_5">&#xe633;</i>
                      <span>扫码发起服务</span>
                    </button>
                  </div>
                  <div className="w_50 text_center float_right">                    
                    <p className="mb_10 font_size20 color_80">服务端</p>
                    <button className="noappearance px_15 py_5 btn_orange font_size16 border_radius_4" onClick={this.showAlert.bind(this,1)}>
                      <i className="iconfont mr_5">&#xe634;</i>
                      <span>点击下载APP</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w_50">
                <ServiceDis data={this.state.disData[0]} />
              </div>
            </div>
          </div>
        </div>
        <div className="content_wrap pt_40 pb_80 background_fff scrollify_anchor_point">
          <div className="mx_auto inner_content_wrap">
            <div className="flexbox items_center product_service_part">
              <div className="w_50">
                <ServiceDis data={this.state.disData[1]} />
              </div>
              <div className="w_50 text_center">
                <img className="w_100 max_img" src={require("../../../images/product/service_disc3.png")} alt="yilutong,壹路通"/>
                <div className="clearfix">
                  <div className="w_50 text_center float_left">                    
                    <p className="mb_10 font_size20 color_80">车主端</p>
                    <button className="noappearance px_15 py_5 btn_orange font_size16 border_radius_4" onClick={this.showAlert.bind(this,2)}>
                      <i className="iconfont mr_5">&#xe633;</i>
                      <span>扫码发起服务</span>
                    </button>
                  </div>
                  <div className="w_50 text_center float_right">                    
                    <p className="mb_10 font_size20 color_80">服务端</p>
                    <button className="noappearance px_15 py_5 btn_orange font_size16 border_radius_4" onClick={this.showAlert.bind(this,1)}>
                      <i className="iconfont mr_5">&#xe634;</i>
                      <span>点击下载APP</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content_wrap pt_40 pb_80">
          <div className="mx_auto inner_content_wrap">
            <div className="flexbox items_center product_service_part scrollify_anchor_point">
              <div className="w_50 text_center">
                <img className="w_100 min_img" src={require("../../../images/product/service_disc8.png")} alt="yilutong,壹路通"/>
                <div className="clearfix">
                  <div className="w_100 text_center float_left">                    
                    <p className="mb_10 font_size20 color_80">车主端</p>
                    <button className="noappearance px_15 py_5 btn_orange font_size16 border_radius_4" onClick={this.showAlert.bind(this,2)}>
                      <i className="iconfont mr_5">&#xe633;</i>
                      <span>扫码发起服务</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w_50">
                <ServiceDis data={this.state.disData[2]} />
              </div>
            </div>
          </div>
        </div>
        {this.state.alertHtml}
      </div>
    );
  }
}

export default PagePart;