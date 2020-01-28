import React, {
  Component
} from 'react'
import CommonHeader from '../../../component/header';
import CommonFooter from '../../../component/footer';
import Features from '../../../component/product/features';
import ServiceType from '../../../component/product/servicetype';
import AlertQrcode from '../../../component/product/alertqrcode';
import Part1 from './part_1';
import Part2 from './part_2';
import pageData from "./pageData.json";

import commonFn from '../../../config/common.js';

class Service extends Component {
  //方法
  //弹出服务
  showAlert(type) {
    let html = (
      <AlertQrcode type={type} />
    )
    this.setState({
      alertHtml: html
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
    // 手机端适配
    let mobileFlag = false;
    if (!commonFn.checkPC()) {
      mobileFlag = true;
    }
    this.state = {
      features: pageData.features,
      servicetype: pageData.servicetype,
      alertHtml: '',
      mobileFlag: mobileFlag
    };
  }
  componentWillMount() {
    //手机端适配meta 其他页面去掉
    if (!commonFn.checkPC()) {
      let metaLink = document.getElementById("deviceviewport");
      if (!metaLink) {
        let metaLink = document.createElement("meta");
        metaLink.id = "deviceviewport";
        metaLink.name = "viewport";
        metaLink.content = "width=device-width,height=device-height,initial-scale=1.0,maximum-scale=1.0,user-scalable=0,viewport-fit=cover";
        document.getElementsByTagName("head")[0].appendChild(metaLink);
      } else {
        metaLink.content = "width=device-width,height=device-height,initial-scale=1.0,maximum-scale=1.0,user-scalable=0,viewport-fit=cover";
      }
    }
  }
  componentDidMount() {
    document.title = "整车驳运";
  }
  componentWillReceiveProps() {
    //props更新
    //约1s 调用一次
  }
  componentWillUnmount() {
    //组件删除    
    //手机端适配meta 其他页面去掉
    let metaLink = document.getElementById("deviceviewport");
    if (metaLink) {
      metaLink.content = "";
    }
    return false;
  }

  render() {
    return (
      <div className={""+(this.state.mobileFlag?" mobileStyle":"")}>
        <CommonHeader model="2"  position="1" />
        <Part1  showQrcodeAlert={this.showAlert.bind(this)}/>
        <div className="mb_60">
           <ServiceType  data={this.state.servicetype}/>
        </div>    
        <Part2  showQrcodeAlert={this.showAlert.bind(this)}/>
        <div className="mb_60">
          <Features data={this.state.features}/>
        </div>        
        <CommonFooter />
        {this.state.alertHtml}
      </div>
    );
  }
}

export default Service;