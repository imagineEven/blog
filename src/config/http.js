import axios from "axios";
import globalData from './config';

// 配置超时时间
axios.defaults.timeout = 100000;

let reactAjax = {
  //ajax get
  ajaxGet: function(postUrl, postData, callBack, errorBack) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: postUrl,
        params: postData,
      }).then(res => {
        callBack && callBack(res.data);
      }).catch(err => {
        errorBack && errorBack(err);
      });
    });
  },
  //ajax post
  ajaxPost: function(postUrl, postData, callBack, errorBack) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: postUrl,
        data: postData,
        dataType: 'json',
      }).then(res => {
        callBack && callBack(res.data);
      }).catch(err => {
        errorBack && errorBack(err);
      });
    });
  },
  //ajax json数据提交 
  ajaxPostJson: function(postUrl, postData, callBack, errorBack) {
    postData = JSON.stringify(postData);
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: postUrl,
        data: postData,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        }
      }).then(res => {
        callBack && callBack(res.data);
      }).catch(err => {
        errorBack && errorBack(err);
      });
    });
  },
  //orcb救援接口
  orcbsysPost: function(code, json, callBack, errorBack) {
    let postUrl = globalData.urlIp1 + '/WeprocServlet?transCode=' + code;
    let postData = {
      responseNo: (Date.now()),
      transCode: code,
      responseBody: json,
      userName: "13162613092",
      channelCode: ["OR_WECHAT"],
      clientId: 122222
    };
    postData = JSON.stringify(postData);
    axios({
      method: 'POST',
      url: postUrl,
      data: postData,
      dataType: 'json',
    }).then(res => {
      callBack && callBack(res.data);
    }).catch(err => {
      errorBack && errorBack(err);
    });
  },
  //获取新闻列表
  getNewsList: function(postData, callBack, errorBack) {
    let postUrl = globalData.urlIp1 + "/newsJson";
    this.ajaxGet(postUrl, postData, callBack, errorBack);
  },
  //获取新闻详情
  getNewsDetail: function(postData, callBack, errorBack) {
    let postUrl = globalData.urlIp1 + "/newDetailJson";
    this.ajaxGet(postUrl, postData, callBack, errorBack);
  },
  //获取招聘职位列表
  getRecruitList: function(postData, callBack, errorBack) {
    let postUrl = globalData.urlIp1 + "/recruitJson";
    this.ajaxGet(postUrl, postData, callBack, errorBack);
  },
  //申请加盟
  applyJoinUs: function(postData, callBack, errorBack) {
    let postUrl = globalData.urlIp2 + "/user/saveLeagueCompany";
    this.ajaxPost(postUrl, postData, callBack, errorBack);
  }
}
export default reactAjax;