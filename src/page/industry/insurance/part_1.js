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
        <div className="flexbox page_title_part" style={{'backgroundImage':('url('+require("../../../images/banner/top_banner5.jpg")+')')}}>
          <div className="content_wrap">
            <h1 className="mb_30 font_size55 color_fff">全价值链保险科技解决方案</h1>
            <h2 className="font_size35 color_fff line_height12 industry_h2">端到端全流程闭环管理</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;