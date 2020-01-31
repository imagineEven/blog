import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';
import commonFn from '../config/common.js';

import logo_img_white from "../images/logo_white.png";
import logo_img_black from "../images/logo_black.png";
class Header extends Component {
  //手机端显隐
  mobileLinkToggle(e) {
    // 获取被绑定的元素
    let pointer = e.currentTarget;
    let links = document.getElementsByClassName("mobile_links")[0];
    if (links) {
      if (links.className.indexOf("show") > -1) {
        // className本身就是dom的api;
        links.className = links.className.replace(" show", "");
        pointer.className = pointer.className.replace(" hide", "");
      } else {
        links.className = links.className + " show";
        pointer.className = pointer.className + " hide";
      }
    }
  }
  //处理整体样式
  changeStyle(model) {
    let logo_img = logo_img_white;
    //0 默认白色； 1 黑色 ; 2 黑底白字 ;3 隐藏头部
    if (model && (model === '1' || model === 1)) {
      logo_img = logo_img_black;
    }
    this.setState({
      modelStyle: (" type" + (model || '')),
      logoImage: logo_img
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
  //显隐联系弹框
  showContactAlert() {
    this.setState({
      contactAlertFlag: true
    })
  }
  hideContactAlert() {
    this.setState({
      contactAlertFlag: false
    })
  }
  toggleContactAlert() {
    let bool = this.state.contactAlertFlag;
    this.setState({
      contactAlertFlag: !bool
    })
  }
  constructor(props) {
    super(props);
    // 手机端适配
    let mobileFlag = false;
    if (!commonFn.checkPC()) {
      mobileFlag = true;
    }
    //选项位移
    let position = props.position || 0;
    this.state = {
      modelStyle: '',
      logoImage: logo_img_white,
      activePosition: Number(position),
      contactAlertFlag: false,
      mobileFlag: mobileFlag
    }
  }
  componentDidMount() {
    // 当组件之间传递参数的时候，也在props对象里；
    let model = this.props.model;
    this.changeStyle(model);
    //手机端适配 缩放版缩放

    // 移动端的操作；
    if (!commonFn.checkPC()) {
      let metaLink = document.getElementById("deviceviewport");
      let mobile = document.getElementsByClassName("header-mobile-content")[0];
      //logo居中
      let navs = document.getElementsByClassName("mobile_navs")[0];
      // console.log('navs', navs);
      if (!metaLink || metaLink.content === "") {
        let scale = (document.body.clientWidth / window.screen.width).toFixed(2);
        // mobile.style.zoom = scale;
        // console.log('scale', scale);
        mobile.style.transform = 'scale(' + scale + ',' + scale + ')';
        mobile.style.transformOrigin = 'left top';
        mobile.style.width = window.screen.width + "px";
        // 拼接需要大小写；
        navs.style.marginRight = (15 / scale).toFixed(2) + "vw";
      } else {
        // mobile.style.zoom = 1;
        mobile.style.transform = 'scale(1,1)';
        navs.style.marginRight = 15 + "vw";
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    let model = nextProps.model;
    this.changeStyle(model);
  }
  render() {
    return (
      <div className={"fixed_lt w_100 header-wrap color_fff"+this.state.modelStyle + (this.state.mobileFlag?" mobileStyle":"")} style={{"zIndex":500}}>
        {/*pc端*/}
        <div className="content_wrap header-content font_size18 mobileHide">
          <div className="flexbox items_center">
            <Link to="/home" className="flex_0 pointer mr_50">
              {/* <img className="logo-img" src={this.state.logoImage} alt="yilutong,壹路通"/> */}
              <div className="logo-img f-c-c">Even小舍</div>
            </Link>            
            <ul className="flex_grow relative line_nowrap text_right">
              <li className="inline_block relative">
                <Link to="/product/data" className={"py_35  inline_block pointer link_nav"+(this.state.activePosition === 1? ' active':'')}>
                  <span>个人</span>
                </Link>
                <ul className="absolute_lt py_23 w_100 font_size16 color_fff background_black60 hide">
                  <li className="text_center font_size18">
                    <p className="py_12 inline_block w_100">
                      <span>个人</span>
                    </p>
                  </li>
                  <li className="text_center">
                    <Link to="/product/carowner" className="py_12 inline_block w_100 pointer">
                      <span>日记</span>
                    </Link>
                  </li>
                  <li className="text_center">
                    <Link to="/product/DevOps" className="py_12 inline_block w_100 pointer">
                      <span>技术</span>
                    </Link>
                  </li>
                  <li className="text_center">
                    <Link to="/product/survey" className="py_12 inline_block w_100 pointer">
                      <span>感语</span>
                    </Link>
                  </li>
                  <li className="text_center">
                    <Link to="/product/transcar" className="py_12 inline_block w_100 pointer">
                      <span>经历 </span>
                    </Link>
                  </li>
                  <li className="text_center">
                    <Link to="/product/carfleet" className="py_12 inline_block w_100 pointer">
                      <span>生活</span>
                    </Link>
                  </li>  
                  <li className="text_center">
                    <Link to="/product/storeManage" className="py_12 inline_block w_100 pointer">
                      <span>门店管理</span>
                    </Link>
                  </li>             
                </ul>
              </li>
              <li className="inline_block relative">
                <Link to="/industry/merchant" className={"py_35  inline_block pointer link_nav"+(this.state.activePosition === 2? ' active':'')}>
                  <span>CSS</span>
                </Link>
                <ul className="absolute_lt py_23 w_100 font_size16 color_fff background_black60 hide">  
                  <li className="text_center font_size18">
                    <p className="py_12 inline_block w_100">
                      <span>CSS</span>
                    </p>
                  </li>
                  <li className="text_center">
                    <Link to="/industry/insurance" className="py_12 inline_block w_100 pointer">
                      <span>保险机构</span>
                    </Link>
                  </li>
                  <li className="text_center">
                    <Link to="/industry/bank" className="py_12 inline_block w_100 pointer">
                      <span>银行机构</span>
                    </Link>
                  </li>
                  <li className="text_center">
                    <Link to="/industry/carfactory" className="py_12 inline_block w_100 pointer">
                      <span>整车厂商</span>
                    </Link>
                  </li>
                  <li className="text_center">
                    <Link to="/industry/provider" className="py_12 inline_block w_100 pointer" style={{"textIndent": "1em"}}>
                      <span>汽车服务商</span>
                    </Link>
                  </li>               
                </ul>
              </li>
              <li className="inline_block relative">
                <Link to="/technology/intelligence" className={"py_35  inline_block pointer link_nav"+(this.state.activePosition === 3? ' active':'')}>
                  <span>JavaScript</span>
                </Link>
                <ul className="absolute_lt py_23 w_100 font_size16 color_fff background_black60 hide">
                  <li className="text_center font_size18">
                    <p className="py_12 inline_block w_100">
                      <span>JavaScript</span>
                    </p>
                  </li> 
                  <li className="text_center">
                    <Link to="/technology/intelligence" className="py_12 inline_block w_100 pointer">
                      <span>人工智能</span>
                    </Link>
                  </li>
                  <li className="text_center">
                    <Link to="/technology/image" className="py_12 inline_block w_100 pointer">
                      <span>图像识别</span>
                    </Link>
                  </li>
                  <li className="text_center">
                    <Link to="/technology/voice" className="py_12 inline_block w_100 pointer">
                      <span>语音识别</span>
                    </Link>
                  </li>
                  <li className="text_center">
                    <Link to="/technology/security" className="py_12 inline_block w_100 pointer">
                      <span>隐私安全</span>
                    </Link>
                  </li>           
                </ul>
              </li>
              {/*<li className="inline_block relative">
                <Link to="/about/joins" className={"py_35  inline_block pointer link_nav"+(this.state.activePosition === 4? ' active':'')}>
                  <span>合作加盟</span>
                </Link>
              </li>*/}
              <li className="inline_block relative">
                <Link to="/about/introduce" className={"py_35  inline_block pointer link_nav"+(this.state.activePosition === 5? ' active':'')}>
                  <span>其他</span>
                </Link>
                <ul className="absolute_lt py_23 w_100 font_size16 color_fff background_black60 hide">  
                  <li className="text_center font_size18">
                    <p className="py_12 inline_block w_100">
                      <span>其他</span>
                    </p> 
                  </li>
                  <li className="text_center">
                    <Link to="/about/introduce" className="py_12 inline_block w_100 pointer">
                      <span>公司介绍</span>
                    </Link>
                  </li>
                  <li className="text_center">
                    <Link to="/about/joins" className="py_12 inline_block w_100 pointer">
                      <span>合作加盟</span>
                    </Link>
                  </li>
                  <li className="text_center">
                    <Link to="/about/report" className="py_12 inline_block w_100 pointer">
                      <span>媒体报道</span>
                    </Link>
                  </li>
                  <li className="text_center">
                    <Link to="/about/recruit" className="py_12 inline_block w_100 pointer">
                      <span>招贤纳士</span>
                    </Link>
                  </li>
                 {/* <li className="text_center">
                    <Link to="/about/contactus" className="py_12 inline_block w_100 pointer">
                      <span>联系我们</span>
                    </Link>
                  </li> */}                 
                </ul>
              </li>
            </ul>
            <div className="flex_0 btn-wrap ml_25">
                {/* <a href="http://www.yilutong.com/uniway/login/in" target="_bank">
                  <button type="button" className="noappearance background_1a color_orange border_radius_6 btn mr_15">登录</button>
                </a> */}
                <div className="inline_block relative">              
                  <button type="button" className="noappearance background_orange color_fff border_radius_6 btn"  onClick={this.toggleContactAlert.bind(this)}>联系我</button>
                  <div className="absolute_rt px_25 py_30 background_fff box_shadow_2 alert_contact" style={{"display":(this.state.contactAlertFlag?"block":"none")}}>
                    <i className="absolute_rt iconfont px_20 py_20 color_80 pointer" onClick={this.hideContactAlert.bind(this)}>&#xe65c;</i>
                    <div className="flexbox items_center mb_30">
                        <div className="flex_0 mr_25">
                          <i className="iconfont font_size30 color_666">&#xe629;</i>
                        </div>
                        <div className="flex_grow font_size18 color_4d">
                          <p className="mb_5">手机</p>
                          {/* 拨打电话功能 */}
                          <a href="tel:17601302923" className="color_orange">176-0130-2923</a>
                        </div>
                    </div>
                    <div className="flexbox items_center mb_30">
                        <div className="flex_0 mr_25">
                          <i className="iconfont font_size30 color_666">&#xe627;</i>
                        </div>
                        <div className="flex_grow font_size18 color_4d">
                          <p className="mb_5">固话</p>
                          <a href="tel:04695390221" className="color_orange">0469-5390221</a>
                        </div>
                    </div>
                    <div className="flexbox items_center">
                        <div className="flex_0 mr_25">
                          <i className="iconfont font_size30 color_666">&#xe628;</i>
                        </div>
                        <div className="flex_grow font_size18 color_4d">
                          <p className="mb_5">邮箱</p>
                          <a href="mailto:1016000928@qq.com" className="color_orange">1016000928@qq.com</a>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        {/*移动端*/}        
        <div className="header-mobile-content font_size14 hide mobileShow">
          <div className="py_8 content_wrap flexbox items_center">
            <div className="flex_0">
              <div className="mobile_navs pointer" onClick={(e)=>this.mobileLinkToggle(e)}>
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
              </div>
            </div>
            <Link to="/home" className="flex_grow pointer text_center">
              <img className="logo-img" src={this.state.logoImage} alt="yilutong,壹路通"/>
            </Link>
            <div className="flex_0 btn-mobile-wrap">
                {/* 在新的页面打开链接 */}
                {/* <a href="http://www.yilutong.com/uniway/login/in" target="_bank">
                  <button type="button" className="noappearance background_1a color_orange border_radius_4 btn mr_5">登录</button>
                </a> */}
                <div className="inline_block relative">              
                  <button type="button" className="noappearance background_orange color_fff border_radius_4 btn"  onClick={this.toggleContactAlert.bind(this)}>联系我</button>
                  <div className="absolute_rt px_25 py_30 background_fff box_shadow_2 alert_contact" style={{"display":(this.state.contactAlertFlag?"block":"none")}}>
                    <i className="absolute_rt iconfont px_20 py_20 color_80 pointer" onClick={this.hideContactAlert.bind(this)}>&#xe65c;</i>
                    <div className="flexbox items_center mb_30">
                        <div className="flex_0 mr_25">
                          <i className="iconfont font_size30 color_666">&#xe629;</i>
                        </div>
                        <div className="flex_grow font_size18 color_4d">
                          <p className="mb_5">手机</p>
                          <a href="tel:15618583212" className="color_orange">156-1858-3212</a>
                        </div>
                    </div>
                    <div className="flexbox items_center mb_30">
                        <div className="flex_0 mr_25">
                          <i className="iconfont font_size30 color_666">&#xe627;</i>
                        </div>
                        <div className="flex_grow font_size18 color_4d">
                          <p className="mb_5">固话</p>
                          <a href="tel:02163590171" className="color_orange">021-6359-0171</a>
                        </div>
                    </div>
                    <div className="flexbox items_center">
                        <div className="flex_0 mr_25">
                          <i className="iconfont font_size30 color_666">&#xe628;</i>
                        </div>
                        <div className="flex_grow font_size18 color_4d">
                          <p className="mb_5">邮箱</p>
                          <a href="mailto:amin@yilutong.com" className="color_orange">amin@yilutong.com</a>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="absolute_lt w_100 background_335 mobile_links" style={{"top":"47px","zIndex":'150'}}>
            <ul className="content_wrap font_size14 line_nowrap">
              <li className="relative">
                <div className={"pb_10 color_99B pointer link_nav"+(this.state.activePosition === 1? ' active':'')}>
                  <span>产品服务</span>
                </div>
                <ul className="w_100 color_fff clearfix">
                  <li className="w_33 float_left">
                    <Link to="/product/carowner" className="py_8 inline_block w_100 pointer">
                      <span>车主服务</span>
                    </Link>
                  </li>
                  <li className="w_33 float_left">
                    <Link to="/product/DevOps" className="py_8 inline_block w_100 pointer">
                      <span>客户运维</span>
                    </Link>
                  </li>
                  <li className="w_33 float_left">
                    <Link to="/product/survey" className="py_8 inline_block w_100 pointer">
                      <span>查勘定损</span>
                    </Link>
                  </li>
                  <li className="w_33 float_left">
                    <Link to="/product/transcar" className="py_8 inline_block w_100 pointer">
                      <span>整车驳运</span>
                    </Link>
                  </li>
                  <li className="w_33 float_left">
                    <Link to="/product/carfleet" className="py_8 inline_block w_100 pointer">
                      <span>车队管理</span>
                    </Link>
                  </li>  
                  <li className="w_33 float_left">
                    <Link to="/product/storeManage" className="py_8 inline_block w_100 pointer">
                      <span>门店管理</span>
                    </Link>
                  </li>             
                </ul>
              </li>
              <li className="relative">
                <div className={"pb_10 color_99B pointer link_nav"+(this.state.activePosition === 2? ' active':'')}>
                  <span>行业方案</span>
                </div>
                <ul className="w_100 color_fff clearfix">  
                  <li className="w_33 float_left">
                    <Link to="/industry/insurance" className="py_8 inline_block w_100 pointer">
                      <span>保险机构</span>
                    </Link>
                  </li>
                  <li className="w_33 float_left">
                    <Link to="/industry/bank" className="py_8 inline_block w_100 pointer">
                      <span>银行机构</span>
                    </Link>
                  </li>
                  <li className="w_33 float_left">
                    <Link to="/industry/carfactory" className="py_8 inline_block w_100 pointer">
                      <span>整车厂商</span>
                    </Link>
                  </li>
                  <li className="w_33 float_left">
                    <Link to="/industry/provider" className="py_8 inline_block w_100 pointer">
                      <span>汽车服务商</span>
                    </Link>
                  </li>               
                </ul>
              </li>
              <li className="relative">
                <div className={"pb_10 color_99B pointer link_nav"+(this.state.activePosition === 3? ' active':'')}>
                  <span>壹路通科技</span>
                </div>
                <ul className="w_100 color_fff clearfix">                   
                  <li className="w_33 float_left">
                    <Link to="/technology/intelligence" className="py_8 inline_block w_100 pointer">
                      <span>人工智能</span>
                    </Link>
                  </li>
                  <li className="w_33 float_left">
                    <Link to="/technology/image" className="py_8 inline_block w_100 pointer">
                      <span>图像识别</span>
                    </Link>
                  </li>
                  <li className="w_33 float_left">
                    <Link to="/technology/voice" className="py_8 inline_block w_100 pointer">
                      <span>语音识别</span>
                    </Link>
                  </li>
                  <li className="w_33 float_left">
                    <Link to="/technology/security" className="py_8 inline_block w_100 pointer">
                      <span>隐私安全</span>
                    </Link>
                  </li>           
                </ul>
              </li>
              <li className="relative">
                <div className={"pb_10 color_99B pointer link_nav"+(this.state.activePosition === 5? ' active':'')}>
                  <span>关于我们</span>
                </div>
                <ul className="w_100 color_fff clearfix">                   
                  <li className="w_33 float_left">
                    <Link to="/about/introduce" className="py_8 inline_block w_100 pointer">
                      <span>公司介绍</span>
                    </Link>
                  </li>
                  <li className="w_33 float_left">
                    <Link to="/about/joins" className="py_8 inline_block w_100 pointer">
                      <span>合作加盟</span>
                    </Link>
                  </li>
                  <li className="w_33 float_left">
                    <Link to="/about/report" className="py_8 inline_block w_100 pointer">
                      <span>媒体报道</span>
                    </Link>
                  </li>
                  <li className="w_33 float_left">
                    <Link to="/about/recruit" className="py_8 inline_block w_100 pointer">
                      <span>招贤纳士</span>
                    </Link>
                  </li>
                 {/* <li className="w_33 float_left">
                    <Link to="/about/contactus" className="py_8 inline_block w_100 pointer">
                      <span>联系我们</span>
                    </Link>
                  </li> */}                 
                </ul>
              </li>
            </ul>
          </div>     
        </div>
      </div>
    );
  }
}
export default Header;