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
        <div className="py_80 text_center">
          <h2 className="mb_25 font_size50 color_4d ">服务流程</h2>
          <p className="font_size22 color_80 font_lighter line_height15">发货方通过小程序直接下单，<br className='line_br'/>运货方通过APP接单和运送，多方可实时监控运货全程。</p>
        </div>
        <div className="content_wrap pb_100">
          <div className="mx_auto inner_content_wrap">
            <div className="flexbox items_center product_service_part">
              <div className="w_50 text_center relative">              
                <div className="absolute_rt hide mobileShow clearfix pinter" onClick={this.showAlert.bind(this,4)}>
                  <img className="border_50 mr_10" src={require("../../../images/ylt_byt_qrcode.jpg")} alt="壹路通,yilutong" style={{"width":"54px"}}/>
                  <p className="pt_15 font_size10 color_666 vertical_middle line_height12">识别二维码<br/>立即运车</p>
                </div>
                <img className="w_100 max_img" src={require("../../../images/product/service_disc1.png")} alt="yilutong,壹路通"/>  
                <div className="clearfix mobileHide">
                  <div className="w_50 text_center float_left">                    
                    <p className="mb_10 font_size20 color_80">车主端</p>
                    <button className="noappearance px_15 py_5 btn_orange font_size16 border_radius_4" onClick={this.showAlert.bind(this,4)}>
                      <i className="iconfont mr_5">&#xe633;</i>
                      <span>我要运车</span>
                    </button>
                  </div>
                  <div className="w_50 text_center float_left">
                    <p className="mb_10 font_size20 color_80">服务端</p>
                    <button className="noappearance px_15 py_5 btn_orange font_size16 border_radius_4" onClick={this.showAlert.bind(this,1)}>
                      <i className="iconfont">&#xe634;</i>
                      <span>点击下载APP</span>
                    </button>
                  </div>
                </div>
                <div className="clearfix hide mobileShow">
                  <div className="text_center">
                    <button className="noappearance px_15 py_5 btn_orange font_size16 border_radius_6" onClick={this.showAlert.bind(this,1)}>
                      <i className="iconfont font_size20 mr_5">&#xe634;</i>
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
        {this.state.alertHtml}
      </div>
    );
  }
}

export default PagePart;