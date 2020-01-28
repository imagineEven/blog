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
    this.state = {
      features: pageData.features,
      servicetype: pageData.servicetype,
      alertHtml: ''
    };
  }
  componentWillMount() {}
  componentDidMount() {
    document.title = "客户运维";
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
      <div>
        <CommonHeader model="2"  position="1" />
        <Part1 />
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