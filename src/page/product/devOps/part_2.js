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
          <p className="font_size22 color_80 font_lighter line_height15">
          充分调研的基础上，为企业搭建专属车主服务平台，灵活嵌入其官方平台，<br className='line_br'/>协助企业设计个性化品牌界面、运营活动，定期反馈服务报告、调整运营策略。</p>
        </div>
        <div className="content_wrap pb_100">
          <div className="mx_auto inner_content_wrap">
            <div className="flexbox items_center product_service_part">
              <div className="w_50 text_center">
                <img className="w_100 min_img" src={require("../../../images/product/service_disc5.png")} alt="yilutong,壹路通"/>
                <div className="clearfix">
                  <div className="w_100 text_center float_left">
                    <p className="mb_10 font_size20 color_80">客户端</p>
                    <button className="noappearance px_15 py_5 btn_orange font_size16 border_radius_4" onClick={this.showAlert.bind(this,3)}>
                       <i className="iconfont mr_5">&#xe633;</i>
                      <span>扫码体验</span>
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