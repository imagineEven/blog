import React, {
  Component
} from 'react'
import pageData from "./pageData.json";

import $http from '../../../config/http.js';
import commonFn from '../../../config/common.js';

class PagePart extends Component {
  companyLinenseImageFile = '';
  companyLinenseBase64 = '';
  //方法
  //显隐申请
  showApplyAlert() {
    this.setState({
      applyFlag: true
    })
  }
  hideApplyAlert() {
    this.setState({
      applyFlag: false
    })
  }
  chooseImage() {
    let _this = this;
    let fileData = _this.refs.licenseImg.files[0];
    if (!fileData) {
      return;
    }
    _this.companyLinenseImageFile = fileData;
    let base = commonFn.getObjectURL(fileData);
    commonFn.convertImgToBase64type(base, function(base64Img) {
      let reg = new RegExp('^data:image/[^;]+;base64,');
      _this.companyLinenseBase64 = base64Img.replace(reg, '');
      _this.setState({
        base64Img: base64Img,
        base64Flag: true
      })
    })
  }
  checkApplyForm(input) {
    let inputDom = input.target;
    let typeName = inputDom.name;
    let inputValue = inputDom.value;
    //获取父类star
    let parentStar = inputDom,
      starFlag = false;
    do {
      parentStar = parentStar.parentNode;
      if (!parentStar) {
        starFlag = true;
      }
      if (parentStar.className.indexOf("star") > -1) {
        starFlag = true;
      }
    } while (!starFlag);
    //无父类不操作
    if (!parentStar) {
      return;
    }
    let errorFlag = false; //默认无错
    if (typeName === "phone") {
      if (!commonFn.checkPhoneNumber(inputValue)) {
        errorFlag = true;
      }
    } else {
      if (!inputValue) {
        errorFlag = true;
      }
    }
    //添加或移除error
    if (errorFlag) {
      if (parentStar.className.indexOf("error") === -1) {
        parentStar.className += " error";
      }
    } else {
      if (parentStar.className.indexOf("error") > -1) {
        parentStar.className = parentStar.className.replace("error", "");
      }
    }
  }
  applyFormPost() {
    let _this = this;
    let formData = commonFn.getFormData("#applyForm");
    let errorFlag = false;
    if (!formData.company_name) {
      let starDom = document.querySelectorAll(".star")[0];
      if (starDom.className.indexOf("error") === -1) {
        starDom.className += " error";
      }
      errorFlag = true;
    }
    if (!formData.name) {
      let starDom = document.querySelectorAll(".star")[1];
      if (starDom.className.indexOf("error") === -1) {
        starDom.className += " error";
      }
      errorFlag = true;
    }
    if (!commonFn.checkPhoneNumber(formData.phone)) {
      let starDom = document.querySelectorAll(".star")[2];
      if (starDom.className.indexOf("error") === -1) {
        starDom.className += " error";
      }
      errorFlag = true;
    }
    if (!formData.service_type) {
      let starDom = document.querySelectorAll(".star")[3];
      if (starDom.className.indexOf("error") === -1) {
        starDom.className += " error";
      }
      errorFlag = true;
    }
    //信息填写不全 或正在申请
    if (errorFlag || !_this.state.applyAjaxBool) return false;

    let postData = new FormData();
    postData.append("userid", formData.phone);
    postData.append("username", formData.name);
    postData.append("password", "1234");
    postData.append("mobilephone", formData.phone);
    postData.append("email", formData.mail);
    postData.append("companyName", formData.company_name);
    postData.append("companyLinense", _this.companyLinenseImageFile);
    postData.append("companyServer", formData.service_type);
    postData.append("companyDesc", formData.company_describe);
    _this.setState({
      applyAjaxBool: false,
    })
    $http.applyJoinUs(postData, function(result) {
      _this.setState({
        applyAjaxBool: true
      })
      alert(result.message);
    }, function() {
      _this.setState({
        applyAjaxBool: true
      })
    })
    return false;
  }
  //服务选项
  structureServiceList() {
    let list = pageData.serviceTypes;
    let html = list.map(function(item, index) {
      return (
        <label className="w_25 inline_block checkbox mb_15" key={index}>
          <input type="checkbox"name="service_type" className="noappearance" value={item.id}/>
          <i className="iconfont font_size26 vertical_middle">&#xe607;</i>
          <i className="iconfont font_size26 vertical_middle hide">&#xe88a;</i>
          <span className="ml_5">{item.name}</span>
        </label>
      );
    })
    this.setState({
      applyServiceTypeHtml: html
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      applyServiceTypeHtml: '',
      applyAjaxBool: true,
      base64Img: '',
      base64Flag: false,
    };
  }
  componentWillMount() {}
  componentDidMount() {
    this.structureServiceList();
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
      <div className="page_part_3">
        <div className="absolute_rt joins_apply_wrap">
          <form id="applyForm" className="background_fff pt_30 pb_30 px_50 font_lighter ">
            <h2 className="font_size32 color_4d text_center mb_40 font_normal">申请加盟</h2>
            <label className="my_20 flexbox items_center font_size22 color_80 star" errmsg="贵公司的名称不能为空">
              <div className="flex_grow border_xy_d2 py_5 px_20 background_fff">
                <input type="text" name="company_name" className="w_100 noappearance font_size20" placeholder="请输入贵公司的名称" onBlur={(e) => this.checkApplyForm(e)}/>
              </div>
            </label>
            <label className="my_20 flexbox items_center font_size22 color_80 star" errmsg="姓名不能为空">
              <div className="flex_grow border_xy_d2 py_5 px_20 background_fff">
                <input type="text" name="name" className="w_100 noappearance font_size20" placeholder="请输入您的姓名" onBlur={(e) => this.checkApplyForm(e)}/>
              </div>
            </label>
            <label className="my_20 flexbox items_center font_size22 color_80 star" errmsg="联系电话输入不正确">
              <div className="flex_grow border_xy_d2 py_5 px_20 background_fff">
                <input type="text" name="phone" className="w_100 noappearance font_size20" placeholder="请输入联系电话" onBlur={(e) => this.checkApplyForm(e)}/>
              </div>
            </label>
            <label className="my_20 flexbox items_center font_size22 color_80">
              <div className="flex_grow border_xy_d2 py_5 px_20 background_fff">
                <input type="email" name="mail" className="w_100 noappearance font_size20" placeholder="请输入邮箱地址"/>
              </div>
            </label>
            <label className="my_20 flexbox items_center font_size22 color_80">
              <div className={"flex_grow border_xy_d2 py_10 px_20 background_fff"+(this.state.base64Flag?" hide":"")}>
                <input ref="licenseImg" type="file" accept="image/*" name="company_license" className="noappearance input_hide" onChange={this.chooseImage.bind(this)}/>
                <i className="iconfont font_size22 color_4d font_bolder">&#xe667;</i>
                <span className="color_ddd">上传营业执照</span>
              </div>
              <div className={"flex_grow border_xy_d2 py_10 px_20 background_fff"+(this.state.base64Flag?"":" hide")}>
                <span className="color_ddd">营业执照</span>
                <p className="text_center">
                  <img className="background_f2" style={{"height":"140px"}} src={this.state.base64Img} alt="yilutong,壹路通"/>
                </p>
              </div>
            </label>
            <div className="mt_20 font_size22 color_80 star" errmsg="至少选择一种可提供的服务">
              <div className="color_4d pt_10">您的企业能提供什么服务</div>
              <div className="mt_15">
                {this.state.applyServiceTypeHtml}
              </div>
            </div>
            <label className="my_20 font_size22 color_80">
              <div className="color_4d pt_10">简单描述您的企业</div>
              <div className="mt_15 border_xy_d2 py_5 px_10 background_fff">
                <textarea className="w_100 noappearance font_size20" name="company_describe" placeholder="业务区域；运营能力；是否有调度中心等"></textarea>
              </div>
            </label>
            <div className="mt_40 text_center">
              <button type="button" className="noappearance btn_orange py_10 px_100 mx_60 text_center font_size27 color_fff border_radius_6" disabled={this.state.applyAjaxBool?false:true}  onClick={this.applyFormPost.bind(this)}>
              <i className="iconfont font_size22 color_fff font_bolder forever_rotate mr_15" style={{"display":(this.state.applyAjaxBool?"none":"inline-block")}}>&#xe600;</i>
              {this.state.applyAjaxBool?"确定":"申请中"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PagePart;