import React, {
  Component
} from 'react'

class PagePart extends Component {
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

  constructor(props) {
    super(props);
    this.state = {};
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
      <div className="page_part_1">
        <div className="flexbox page_title_part" style={{'backgroundImage':('url('+require("../../../images/banner/top_banner4.jpg")+')')}}>
          <div className="mx_auto" style={{'width':'75%'}}>
            <h1 className="mb_30 font_size46 color_fff">汽车电商</h1>
            <h2 className="font_size35 color_fff line_height12 industry_h2">我们为汽车电商、二手车平台和租赁公司提供专业的整车驳运解决方案</h2>
          </div>
        </div>
        <div className="mt_100 mb_20 mx_auto flexbox" style={{'width':'52%'}}>
          <p className="font_size18 color_80 line_height20 text_center">二手车租赁和交易兴起，汽车电商迅速发展，由于平台模式强烈依赖线上线下相结合的运营效率，因此如何满足线下临时、零散甚至预期之外的车辆运输需求，成为影响平台效率和用户体验的关键因素。</p>
        </div>
      </div>
    );
  }
}

export default PagePart;