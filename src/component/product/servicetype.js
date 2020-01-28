import React, {
  Component
} from 'react'
import Swiper from '../../library/swiper.min.js';
import '../../library/swiper.min.css';

class ServiceType extends Component {
  //方法
  swiperServiceIcon = ''; //首页一级菜单
  //构造产品特色html
  structureHtml(list) {
    let _this = this;
    let length = 0;
    let html = list.map(function(item, index) {
      length = item.length;
      let part_length = item.length > 6 ? '6' : item.length;
      let innerHtml = item.map(function(item2, index2) {
        let part_w = (100 / part_length) + "%";
        let iconImg = require(("../../" + item2.iconImg));
        return (
          <div className="swiper-slide px_10 text_center font_size0" key={index2} style={{"width":part_w}}>
            <img className="iconImg" src={iconImg} alt="yilutong,壹路通"/>
            <h4 className="mb_25 font_size24 color_80 font_lighter">{item2.title || ''}</h4>
          </div>)
      })
      let navigationHtml = '';
      if (item.length > 6) {
        navigationHtml = (
          <div>
            <div className="product_servicetype_prev pointer">
              <i className="iconfont font_size20 color_ca">&#xe65d;</i>
            </div>
            <div className="product_servicetype_next pointer">
              <i className="iconfont font_size20 color_ca">&#xe88b;</i>
            </div>
          </div>
        )
      }
      return (
        <div className="swiper-container" style={{"minWidth": "100%"}} ref={el => (_this.swiperServiceIcon = el)} key={index}>
          <div className="swiper-wrapper">
            {innerHtml}
          </div>
          {navigationHtml}
        </div>
      )
    })
    let swiperOption = {
      slidesPerView: 'auto',
      roundLengths: true,
      navigation: {
        nextEl: '.product_servicetype_next',
        prevEl: '.product_servicetype_prev',
      },

    }
    if (length > 6) {
      swiperOption = {
        loop: true,
        speed: 2500,
        autoplay: {
          disableOnInteraction: false,
          delay: 0
        },
        slidesPerView: "auto",
        roundLengths: true,
        navigation: {
          nextEl: '.product_servicetype_next',
          prevEl: '.product_servicetype_prev',
        },
      }
    }
    this.setState({
      listHtml: html
    }, function() {
      new Swiper(this.swiperServiceIcon, swiperOption)
    })
  }
  constructor(props) {
    super(props);
    let datas = props.data;
    this.state = {
      listData: datas.list,
      title: datas.title,
      describe: datas.describe,
      topFlag: datas.topFlag || false,
      listHtml: [],
    };
  }
  componentWillMount() {}
  componentDidMount() {
    let listData = this.state.listData;
    this.structureHtml(listData);
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
      <div className="product_servicetype">
        <div className={"pt_65 text_center" + (this.state.topFlag?"":" hide")}>
          <h2 className="mb_25 font_size50 color_4d ">{this.state.title}</h2>
          <p className="font_size22 color_80 line_height15"  dangerouslySetInnerHTML={{__html:this.state.describe || ''}}></p>
        </div>
        <div className="content_wrap pt_65">
          <div className="mx_auto inner_content_wrap">
            {this.state.listHtml}
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceType;