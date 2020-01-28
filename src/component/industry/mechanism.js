import React, {
  Component
} from 'react'

class Mechaism extends Component {
  //方法
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
  //构造解决方案html
  structureMechaismHtml(list) {
    let _this = this;
    let html = list.map(function(item, index) {
      let innerHtml = item.map(function(item2, index2) {
        let redirect = '';
        if (item2.contentHtml) {
          redirect = (
            <div onClick={(el) => _this.showMechaismContent(el,index,index2)} className="inline_block font_size22 color_orange pointer line_nowrap">点击详情 ></div>
          )
        }
        let mechaism_banner = require(("../../" + item2.banner));
        let part_w = (100 / item.length) + "%";
        return (
          <div className="px_30 mb_40 part" key={index2} style={{"width":part_w}}>
            <div className="h_100 px_40 py_20 background_fff box_shadow_1">
              <img className="w_100" src={mechaism_banner} alt="yilutong,壹路通"/>
              <p className="my_60 font_size22 color_80 font_lighter line_height15 text_center">{item2.describe}</p> 
              <div className="mb_50 line_height15 font_lighter text_center ">{redirect}</div>   
            </div>         
          </div>
        );
      })
      return (
        <div className="flexbox mechaism_content" key={index}>
          {innerHtml}
        </div>
      )
    })
    this.setState({
      listHtml: html
    })
  };
  //显示合作案例详情
  showMechaismContent(el, index, index2) {
    let _this = this;
    console.log(el, index, index2)
    let html = _this.state.listData[index][index2].contentHtml;
    /*html详情模版
    <div class='mx_auto'>
      <h2 class='my_30 font_size36 color_4d line_height15'></h2>
      <p class='my_30 font_size22 color_80 line_height15 text_justify'></p>
      <div class='text_center'>
        <div class='mx_auto img1'>
      </div>
      <p class='my_30 font_size22 color_80 line_height15 text_justify'></p>
      <div class='my_60 px_50 marks'>
        <p class='my_30 font_size22 color_80 line_height15 text_justify'></p>
        <p class='my_30 font_size22 color_80 line_height15 text_right'></p>
      </div>
      <p class='my_30 font_size22 color_80 line_height15 text_justify'></p>
    </div>
    */
    let contentHtml = (
      <div className="fixed_lt w_100 h_100 flexbox items_center justify_center background_black80 industry_mechaism_alert" style={{"zIndex":'600'}}>
        <div className="background_fff py_70 px_100 relative detail">
          <div className="absolute_rt px_30 py_30 pointer" onClick={_this.hideMechaismContent.bind(_this)}>
            <i className="iconfont font_size30 color_80">&#xe65c;</i>
          </div>
          <div className="mx_auto" dangerouslySetInnerHTML={{__html: html || ''}}></div>
          <div className="iinline_block font_size22 color_orange pointer" onClick={_this.hideMechaismContent.bind(_this)}>
            <i className="iconfont font_size22 vertical_middle">&#xe65e;</i> 返回 
          </div>
        </div>
      </div>
    );
    this.setState({
      contentDateilHtml: contentHtml
    })
    el.preventDefault();
    return false;
  }
  hideMechaismContent() {
    this.setState({
      contentDateilHtml: ''
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      listData: props.data,
      listHtml: [],
      contentDateilHtml: '',
    };
  }
  componentWillMount() {}
  componentDidMount() {
    let listData = this.state.listData;
    this.structureMechaismHtml(listData);
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
      <div className="mx_auto clearfix industry_mechaism_wrap">
        {this.state.listHtml}
        {this.state.contentDateilHtml}
      </div>
    );
  }
}

export default Mechaism;