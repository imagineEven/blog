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
        <div className="flexbox page_title_part" style={{'backgroundImage':('url('+require("../../../images/banner/top_banner8.jpg")+')')}}>
          <div className="content_wrap">
            <h1 className="mb_30 font_size55 color_fff">人工智能</h1>
            <h2 className="font_size35 color_fff line_height12 industry_h2">基于大数据建立更好的人、车、环境交互生态</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;