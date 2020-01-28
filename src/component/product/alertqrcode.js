import React, {
  Component
} from 'react'

class AlertQrcode extends Component {
  //方法
  //弹出服务
  structureAlertHtml(type) {
    console.log(type)
    let _this = this;
    let alertImg, alertMsg;
    if (type && type === 1) {
      alertImg = require("../../images/ylt_app_qrcode.png");
      alertMsg = "扫一扫，即可安装最新APP";
    } else if (type && type === 2) {
      alertImg = require("../../images/ylt_wx_u_qrcode.jpg");
      alertMsg = "扫一扫，享受优质服务";
    } else if (type && type === 3) {
      alertImg = require("../../images/ylt_zkt_qrcode.jpg");
      alertMsg = "微信扫一扫，掌客通为您服务";
    } else if (type && type === 4) {
      alertImg = require("../../images/ylt_byt_qrcode.jpg");
      alertMsg = "微信扫一扫，运车就用驳运通";
    } else if (type && type === 5) {
      alertImg = require("../../images/ylt_wx_jy_qrcode.png");
      alertMsg = "扫码发起服务";
    } else {
      return;
    }
    let html = (
      <div className="fixed_lt w_100 h_100 flexbox items_center justify_center background_black80 " style={{"zIndex":'180'}} onClick={_this.hideAlert.bind(_this)}>
        <div className="text_center">
          <img src={alertImg} style={{"widh":'200px',"height":'200px'}} alt="yilutong,壹路通"/>
          <p className="mt_20 font_size22 color_fff line_height15" dangerouslySetInnerHTML={{__html: alertMsg || ''}}></p>
        </div>
      </div>
    )
    this.setState({
      alertHtml: html
    })
  }
  showAlert(type) {}
  hideAlert() {
    this.setState({
      alertHtml: ''
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      alertHtml: ''
    };
  }
  componentWillMount() {}
  componentDidMount() {
    let type = this.props.type;
    this.structureAlertHtml(type);
  }
  componentWillReceiveProps(nextProps) {
    //props更新
    //约1s 调用一次
    let type = nextProps.type;
    this.structureAlertHtml(type);
  }
  componentWillUnmount() {
    //组件删除    
    return false
  }

  render() {
    return (
      <div className="">
        {this.state.alertHtml}
      </div>
    );
  }
}
export default AlertQrcode;