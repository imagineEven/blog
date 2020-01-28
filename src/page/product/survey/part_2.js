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
          <p className="font_size22 color_80 font_lighter line_height15">简单案件秒级处理，复杂案件全程管控</p>
        </div>
        <div className="content_wrap pb_100">
          <div className="mx_auto inner_content_wrap">
            <div className="flexbox items_center product_service_part">
              <div className="w_50 text_center">
                <img className="w_100 min_img" src={require("../../../images/product/service_disc4.png")} alt="yilutong,壹路通"/>
                <div className="clearfix">
                  <div className="w_100 text_center float_left">
                    <p className="mb_10 font_size20 color_80">服务端</p>
                    <button className="noappearance px_15 py_5 btn_orange font_size16 border_radius_4" onClick={this.showAlert.bind(this,1)}>
                      <i className="iconfont">&#xe634;</i>
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