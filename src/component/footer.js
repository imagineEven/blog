import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';
import commonFn from '../config/common.js';

import ylt_app_qrcode from "../images/ylt_app_qrcode.png";
import ylt_boyun_qrcode from "../images/ylt_byt_qrcode.jpg";
import ylt_wx_qrcode from "../images/ylt_wx_qrcode.jpg";
import ylt_zkt_qrcode from "../images/ylt_zkt_qrcode.jpg";
class Footer extends Component {
  //手机端底部显隐菜单1s
  nextLinkToggle(e) {
    let mobile = document.getElementsByClassName("mobileStyle")[0];
    if (!mobile) {
      return;
    }
    var supportedCSS, styles = document.getElementsByTagName("head")[0].style,
      toCheck = "transformProperty WebkitTransform OTransform msTransform MozTransform".split(" ");
    for (var i = 0; i < toCheck.length; i++) {
      if (styles[toCheck[i]] !== undefined) {
        supportedCSS = toCheck[i];
      }
    }
    let nextUl = e.currentTarget.nextSibling;
    let icon = e.currentTarget.getElementsByClassName("iconfont")[0];
    if (window.getComputedStyle(nextUl).height === "0px") {
      nextUl.style.height = nextUl.getAttribute("hiheight") + "px";
      icon.style[supportedCSS] = "rotate(45deg)";
    } else {
      nextUl.style.height = "0px";
      icon.style[supportedCSS] = "rotate(0deg)";
    }
  }
  constructor(props) {
    super(props);
    // 手机端适配
    let mobileFlag = false;
    if (!commonFn.checkPC()) {
      mobileFlag = true;
    }
    //年份
    let today = new Date();
    let today_year = today.getFullYear();
    today_year = (today_year > 2019) ? today_year : 2019;

    let styleType = ''; //底部样式 分类 1 padding-top 12px; 默认100px
    if (props.type && (props.type === 1 || props.type === "1")) {
      styleType = " min_pt";
    }
    this.state = {
      today_year: today_year,
      styleType: styleType,
      mobileFlag: mobileFlag
    }
  }
  componentDidMount() {
    //手机端适配 缩放版缩放
    if (!commonFn.checkPC()) {
      let metaLink = document.getElementById("deviceviewport");
      let mobile = document.getElementsByClassName("footer-wrap")[0];
      if (!metaLink || metaLink.content === "") {
        let scale = (document.body.clientWidth / window.screen.width).toFixed(2);
        // mobile.style.zoom = scale;
        mobile.style.transform = 'scale(' + scale + ',' + scale + ')';
        mobile.style.transformOrigin = 'left top';
        mobile.style.width = window.screen.width + "px"
      } else {
        // mobile.style.zoom = 1;
        mobile.style.transform = 'scale(1,1)';
      }
    }
  }
  componentWillMount() {}
  render() {
    return (
      <div className={(this.state.mobileFlag?" mobileStyle":"")}>
        <div className={"background_333 footer-wrap scrollify_anchor_point"+this.state.styleType}>
          <div className="content_wrap pt_100 pb_80">
            <div className="flexbox space_between font_size15 color_fff part_1">
              <div className="flex_0 logo_wrap">
                <Link to="/home">
                <i className="iconfont logo-img color_orange">&#xe606;</i>
                </Link>
              </div>
              <div className="flex_grow px_10">
                <ul className="flexbox space_around link-wrap">
                  <li className="text_left">
                    <p className="py_12 font_size18 block w_100 pointer" onClick={((e) => this.nextLinkToggle(e))}>
                      <span>产品服务</span>
                      <i className="iconfont font_size14 float_right hide">&#xe667;</i>
                    </p>
                    <ul className="" hiheight="144">
                      <li className="text_left">
                        <Link to="/product/carowner" className="py_12 block w_100 pointer">
                          <span>车主服务</span>
                        </Link>
                      </li>
                      <li className="text_left">
                        <Link to="/product/DevOps" className="py_12 block w_100 pointer">
                          <span>客户运维</span>
                        </Link>
                      </li>
                      <li className="text_left">
                        <Link to="/product/survey" className="py_12 block w_100 pointer">
                          <span>查勘定损</span>
                        </Link>
                      </li>
                      <li className="text_left">
                        <Link to="/product/transcar" className="py_12 block w_100 pointer">
                          <span>整车驳运</span>
                        </Link>
                      </li>
                      <li className="text_left">
                        <Link to="/product/carfleet" className="py_12 block w_100 pointer">
                          <span>车队管理</span>
                        </Link>
                      </li>
                      <li className="text_left">
                        <Link to="/product/storeManage" className="py_12 block w_100 pointer">
                          <span>门店管理</span>
                        </Link>
                      </li> 
                    </ul>
                  </li>
                  <li className="text_left">
                    <p className="py_12 font_size18 block w_100 pointer" onClick={((e) => this.nextLinkToggle(e))}>
                      <span>行业方案</span>
                      <i className="iconfont font_size14 float_right hide">&#xe667;</i>
                    </p>
                    <ul className="" hiheight="96">
                      <li className="text_left">
                        <Link to="/industry/insurance" className="py_12 block w_100 pointer">
                          <span>保险机构</span>
                        </Link>
                      </li>
                      <li className="text_left">
                        <Link to="/industry/bank" className="py_12 block w_100 pointer">
                          <span>银行机构</span>
                        </Link>
                      </li>
                      <li className="text_left">
                        <Link to="/industry/carfactory" className="py_12 block w_100 pointer">
                          <span>整车厂商</span>
                        </Link>
                      </li>
                      <li className="text_left">
                        <Link to="/industry/provider" className="py_12 block w_100 pointer">
                          <span>汽车服务商</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="text_left">
                    <p className="py_12 font_size18 block w_100 pointer" onClick={((e) => this.nextLinkToggle(e))}>
                      <span>壹路通科技</span>
                      <i className="iconfont font_size14 float_right hide">&#xe667;</i>
                    </p>
                    <ul className="" hiheight="96">
                      <li className="text_left">
                        <Link to="/technology/intelligence" className="py_12 block w_100 pointer">
                          <span>人工智能</span>
                        </Link>
                      </li>
                      <li className="text_left">
                        <Link to="/technology/image" className="py_12 block w_100 pointer">
                          <span>图像识别</span>
                        </Link>
                      </li>
                      <li className="text_left">
                        <Link to="/technology/voice" className="py_12 block w_100 pointer">
                          <span>语音识别</span>
                        </Link>
                      </li>
                      <li className="text_left">
                        <Link to="/technology/security" className="py_12 block w_100 pointer">
                          <span>隐私安全</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="text_left">
                    <p className="py_12 font_size18 block w_100 pointer" onClick={((e) => this.nextLinkToggle(e))}>
                      <span>关于我们</span>
                      <i className="iconfont font_size14 float_right hide">&#xe667;</i>
                    </p>
                    <ul className="" hiheight="96">
                      <li className="text_left">
                        <Link to="/about/introduce" className="py_12 block w_100 pointer">
                          <span>公司介绍</span>
                        </Link>
                      </li>
                      <li className="text_left">
                        <Link to="/about/joins" className="py_12 block w_100 pointer">
                          <span>合作加盟</span>
                        </Link>
                      </li>
                      <li className="text_left">
                        <Link to="/about/report" className="py_12 block w_100 pointer">
                          <span>媒体报道</span>
                        </Link>
                      </li>
                      <li className="text_left">
                        <Link to="/about/recruit" className="py_12 block w_100 pointer">
                          <span>招贤纳士</span>
                        </Link>
                      </li>
                      {/*<li className="text_left">
                        <Link to="/about/contactus" className="py_12 block w_100 pointer">
                          <span>联系我们</span>
                        </Link>
                      </li>*/}
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="flex_0 qrcode-wrap">
                <div className="w_100 pt_20 flexbox justify_center text_center">
                  <div className="part">
                    <img className="qrcode" src={ylt_app_qrcode} alt="yilutong,壹路通"/>
                    <p className="mt_10 font_size12">壹路通APP</p>
                  </div>
                  <div className="part">
                    <img className="qrcode" src={ylt_boyun_qrcode} alt="yilutong,壹路通"/>
                    <p className="mt_10 font_size12">驳运小程序</p>
                  </div>
                </div>
                <div className="w_100 pt_20 flexbox justify_center text_center">
                  <div className="part">
                    <img className="qrcode" src={ylt_zkt_qrcode} alt="yilutong,壹路通"/>
                    <p className="mt_10 font_size12">掌客通小程序</p>
                  </div>
                  <div className="part">
                    <img className="qrcode" src={ylt_wx_qrcode} alt="yilutong,壹路通"/>
                    <p className="mt_10 font_size12">官方微信</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w_100 background_4d">
            <div className="py_30 color_fff font_size15 clearfix content_wrap part_2"> 
              <div className="float_right contact_wrap">
                <a className="inline_block background_fff border_50" href="tel:4000709958">
                  <i className="iconfont color_4d" title="4000709958">&#xe629;</i>
                </a>
                <a className="inline_block background_fff border_50" href="tel:02163590171">
                  <i className="iconfont color_4d" title="02163590171">&#xe627;</i>
                </a>
                <a className="inline_block background_fff border_50" href="tel:15618583212">
                  <i className="iconfont color_4d" title="15618583212">&#xe62f;</i>
                </a>
                <a className="inline_block background_fff border_50" href="mailto:hr@yilutong.com">
                  <i className="iconfont color_4d" title="hr@yilutong.com">&#xe628;</i>
                </a>
              </div>
              <p className="float_left pt_5">
                <span className="mr_10">友情链接</span>
                <span>嘉兴路迅信息科技有限公司 © 2015-{this.state.today_year}版权所有 许可证号：浙ICP15007730号-1</span>
                <span> | </span>
                <Link to="/about/law">法律声明及隐私权政策</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;