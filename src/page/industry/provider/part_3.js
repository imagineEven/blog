import React, {
  Component
} from 'react'
import Mechanism from '../../../component/industry/mechanism';
import pageData from "./pageData.json";

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
    this.state = {
      mechanismData: pageData.mechanism
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
      <div className="page_part_3 pb_60 background_fc">
        <div className="py_80 text_center">
          <h2 className="font_size50 color_4d">合作案例</h2>
        </div>
        <div className="content_wrap">
          <Mechanism data={this.state.mechanismData} />
        </div>
      </div>
    );
  }
}

export default PagePart;