import React, {
  Component
} from 'react';
import {
  ScrollToTopOnMount,
  SectionsContainer,
  Section
} from 'react-fullpage';


import commonFn from '../../config/common.js';

import CommonHeader from '../../component/header';
import CommonFooter from '../../component/footer';
import AlertQrcode from '../../component/product/alertqrcode';
import Part1 from './part_1';
import Part2 from './part_2';
import Part3 from './part_3';
import Part4 from './part_4';
import AlertVideo from './part_video';

class home extends Component {
  //页面跳转
  //弹出服务
  showAlert(type) {
    let html = (
      <AlertQrcode type={type} />
    )
    this.setState({
      alertHtml: html
    })
  }
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
  //构建PC整屏页面
  structureFullPage(activeSection) {
    let _this = this;
    /*
      hash路由
      hashRouter注意替换
    */
    let header_h = document.querySelector(".header-wrap").clientHeight;
    let options = {
      sectionClassName: 'section',
      anchors: ['/home/1', '/home/2', '/home/3', '/home/4', '/home/5'],
      navigationClass: 'full_page_pointer_wrap',
      navigationAnchorClass: "full_page_pointer",
      scrollBar: false,
      navigation: false,
      arrowNavigation: true,
      sectionPaddingTop: header_h + 'px',
      activeSection: activeSection || 0,
      scrollCallback: function() {
        let hashPath = _this.props.location.pathname,
          hashIndex = 0;
        if (hashPath.indexOf("/home/") > -1) {
          hashIndex = hashPath.replace("/home/", '');
          hashIndex--;
        }
        _this.changeHeaderStyle(hashIndex);
      }
    };
    var fullPage = (
      <div className="full_page_wrap relative">
        <ScrollToTopOnMount />
        <SectionsContainer {...options}>
          <Section className="relative" color="#999">
            <Part1 toShowVideo={_this.showPromotionalVideo.bind(_this)} showQrcodeAlert={this.showAlert.bind(this)} fullPageBack={this.fullPageCallBack.bind(this)}/>
          </Section>
          <Section verticalAlign="true">
            <Part2 />
          </Section>
          <Section verticalAlign="true" color="#f2f2f2">
            <Part3 />
          </Section>
          <Section verticalAlign="true">
            <Part4 />
          </Section>
          <Section color="#333">
            <CommonFooter type="1"/>
          </Section>
        </SectionsContainer>
      </div>
    );
    this.setState({
      fullPageHtmlList: fullPage
    })
  }
  //构建Phone整屏页面
  structurePhoneFullPage() {
    let _this = this;
    let videoHeight = parseInt((document.querySelector("body").clientWidth / 16 * 9)) + "px";
    var fullPage = (
      <div className="full_page_wrap relative">
          <div className="relative top" style={{"height":videoHeight}}>
            <Part1 toShowVideo={_this.showPromotionalVideo.bind(_this)}  showQrcodeAlert={this.showAlert.bind(this)} fullPageBack={this.fullPageCallBack.bind(this)}/>
          </div>
          <div className="pt_150 pb_100 vertical_flex_center relative">
            <Part2 />
          </div>
          <div className="py_100 vertical_flex_center background_fc relative">
            <Part3 />
          </div>
          <div className="py_100 vertical_flex_center relative">
            <Part4 />
          </div>
          <div className="pt_100 background_333 relative">
            <CommonFooter type="1"/>
          </div>
      </div>
    );
    this.setState({
      fullPageHtmlList: fullPage
    })
  }
  fullPageCallBack(typeName) {
    let hashPath = this.props.location.pathname,
      hashIndex = 1;
    if (hashPath.indexOf("/home/") > -1) {
      hashIndex = hashPath.replace("/home/", '');
      hashIndex++;
    }
    if (typeName === 'nextPage') {
      hashIndex = hashIndex > 1 ? hashIndex : 2
      window.location.hash = "/home/" + hashIndex;
    }
  }
  //处理头部header 样式改变
  changeHeaderStyle(hashIndex) {
    var headerModel = 0;
    if (hashIndex === 0) {
      headerModel = 0;
    } else if (hashIndex === 2) {
      headerModel = 2;
    } else if (hashIndex === 4) {
      headerModel = 3;
    } else {
      headerModel = 1;
    }
    this.setState({
      headerModel: headerModel
    })
  }
  //显示宣传视频
  showPromotionalVideo() {
    this.setState({
      promotionalVideoFlag: true
    })
  }
  //隐藏宣传视频
  hidePromotionalVideo() {
    this.setState({
      promotionalVideoFlag: false
    })
  }
  //phone滑动
  phoneScroll() {
    let _this = this;
    let h = document.querySelector(".full_page_wrap").querySelector(".top").clientHeight;
    let scTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (h > scTop) {
      _this.changeHeaderStyle(2);
    } else {
      _this.changeHeaderStyle(1);
    }
  }
  constructor(props) {
    super(props);
    var _this = this;
    // url?后面参数
    var urlParasms = _this.props.location.search;
    urlParasms = commonFn.resetUrl(urlParasms, {
      "curedirect": ''
    })
    if (!urlParasms || urlParasms === '?') {
      urlParasms = '';
    }
    _this.state = {
      alertHtml: '',
      headerModel: 0, //头部样式类型
      urlParasms: urlParasms,
      fullPageHtmlList: '',
      promotionalVideoFlag: false
    }
    this.phoneScroll = this.phoneScroll.bind(this);
  }
  componentWillMount() {
    document.title = "壹路通";
  }
  componentDidMount() {
    // let _this = this;
    let hashPath = this.props.location.pathname,
      hashIndex = 0;
    if (hashPath.indexOf("/home/") > -1) {
      hashIndex = hashPath.replace("/home/", '');
      hashIndex--;
    }
    if (commonFn.checkPC()) {
      this.changeHeaderStyle(hashIndex);
      this.structureFullPage(hashIndex);
    } else {
      this.structurePhoneFullPage(hashIndex);
      this.changeHeaderStyle(2);
      // window.addEventListener("scroll", _this.phoneScroll)
    }
  }
  componentWillUnmount() {
    // let _this = this;
    // window.removeEventListener("scroll", _this.phoneScroll)
    document.querySelector("body").style.overflow = "auto";
    //组件删除    
    return false
  }
  render() {
    return (
      <div className="background_fff page-home" > 
        <CommonHeader model={this.state.headerModel} />
        {this.state.fullPageHtmlList}
        {this.state.promotionalVideoFlag?<AlertVideo hideVideoCallback={this.hidePromotionalVideo.bind(this)}/>:''}
        {this.state.alertHtml}
      </div>
    );
  }
}
export default home;