import React, {
  Component
} from 'react';
import Script from 'react-load-script';
import pageData from "./pageData.json";

class PagePart extends Component {
  //方法
  bmapLoad() {
    let BMap = global.BMap;
    let iconImg = require("../../../images/about_map_location.svg");
    let companyIcon = new BMap.Icon(iconImg, new BMap.Size(36, 36), {
      imageSize: new BMap.Size(36, 36),
    })

    let map = new BMap.Map("companyMap"); // 创建Map实例
    let companyPoint = new BMap.Point(121.489163, 31.207919);
    map.centerAndZoom(companyPoint, 18);
    let companyMarker = new BMap.Marker(companyPoint, {
      icon: companyIcon
    });
    map.addOverlay(companyMarker);
    //向地图添加控件
    map.enableScrollWheelZoom(true);


    let map1 = new BMap.Map("companyMap1"); // 创建Map实例
    let companyPoint1 = new BMap.Point(116.525473, 39.930612);
    map1.centerAndZoom(companyPoint1, 17);
    let companyMarker1 = new BMap.Marker(companyPoint1, {
      icon: companyIcon
    });
    map1.addOverlay(companyMarker1);
    //向地图添加控件
    map1.enableScrollWheelZoom(true);


    let map2 = new BMap.Map("companyMap2"); // 创建Map实例
    let companyPoint2 = new BMap.Point(113.274234, 23.131655);
    map2.centerAndZoom(companyPoint2, 18);
    let companyMarker2 = new BMap.Marker(companyPoint2, {
      icon: companyIcon
    });
    map2.addOverlay(companyMarker2);
    //向地图添加控件
    map2.enableScrollWheelZoom(true);
  }
  constructor(props) {
    super(props);
    this.state = {
      features: pageData.features
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
      <div className="page_part_2">
        <Script url="https://api.map.baidu.com/api?v=2.0&ak=yLeFoqbRlyGcPMdG5oDsU1xavdrsh37l&s=1" onLoad={this.bmapLoad.bind(this)} />
        <div className="pt_100 content_wrap">
          <h2 className="font_size50 color_4d text_center">公司地址</h2>
          <div className="mx_auto inner_content_wrap">
            <div className="mx_auto py_100 flexbox items_center border_b_80">
              <div className="flex_0 w_50 pr_50 color_80 line_height15 font_lighter">
                <h3 className="font_size28 mb_10 font_bolder">上海总部</h3>
                <div className="flexbox font_size22">
                  <p className="flex_0 mr_15 textJustify" style={{"width":"4em"}}>联系地址</p>
                  <p className="flex_grow">上海市黄浦区局门路519号江南智造生活广场</p>
                </div>
                <div className="flexbox font_size22">
                  <p className="flex_0 mr_15 textJustify" style={{"width":"4em"}}>邮编</p>
                  <p className="flex_grow">200010</p>
                </div>
                <div className="flexbox font_size22">
                  <p className="flex_0 mr_15 textJustify" style={{"width":"4em"}}>救援热线</p>
                  <p className="flex_grow">400-070-9958</p>
                </div>
                <div className="flexbox font_size22">
                  <p className="flex_0 mr_15 textJustify" style={{"width":"4em"}}>业务咨询</p>
                  <p className="flex_grow">021-6378-6818</p>
                </div>
                <div className="flexbox font_size22">
                  <p className="flex_0 mr_15 " style={{"width":"4em"}}>加盟热线</p>
                  <p className="flex_grow">021-6378-6815</p>
                </div>
              </div>
              <div className="flex_grow w_50">
                <div className="mx_auto companyMap" id="companyMap"></div>
              </div>
            </div>
            <div className="mx_auto py_100 flexbox items_center border_b_80">
              <div className="flex_0 w_50 pr_50 color_80 line_height15 font_lighter">
                <h3 className="font_size28 mb_10 font_bolder">北京</h3>
                <div className="flexbox font_size22">
                  <p className="flex_0 mr_15 textJustify" style={{"width":"4em"}}>联系地址</p>
                  <p className="flex_grow">朝阳区朝阳北路101号10层</p>
                </div>
                <div className="flexbox font_size22">
                  <p className="flex_0 mr_15 textJustify" style={{"width":"4em"}}>业务咨询</p>
                  <p className="flex_grow">021-6378-6818</p>
                </div>
              </div>
              <div className="flex_grow w_50">
                <div className="mx_auto companyMap" id="companyMap1"></div>
              </div>
            </div>
            <div className="mx_auto py_100 flexbox items_center">
              <div className="flex_0 w_50 pr_50 color_80 line_height15 font_lighter">
                <h3 className="font_size28 mb_10 font_bolder">广州</h3>
                <div className="flexbox font_size22">
                  <p className="flex_0 mr_15 textJustify" style={{"width":"4em"}}>联系地址</p>
                  <p className="flex_grow">越秀区中山五路33号大马站商业中心5层</p>
                </div>
                <div className="flexbox font_size22">
                  <p className="flex_0 mr_15 textJustify" style={{"width":"4em"}}>业务咨询</p>
                  <p className="flex_grow">021-6378-6818</p>
                </div>
              </div>
              <div className="flex_grow w_50">
                <div className="mx_auto companyMap" id="companyMap2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;