import React, {
  Component
} from 'react'
import Solution from '../../../component/industry/solution';
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
      solutionData: pageData.solution
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
        <div className="py_80 text_center">
          <h2 className="mb_25 font_size46 color_4d ">解决方案</h2>
          <p className="font_size18 color_80 font_lighter line_height15">
          我们致力于汽车大数据和人工智能技术研发，帮助服务商数字化业务流程，通过接收更多订单、<br className="line_br"/>提高作业效率来增加整体收入；为改善服务商内部效率，我们开发了实用的ERP管理系统，<br className="line_br"/>让数据和成本管理更加清晰透明。</p>
        </div>
        <div className="content_wrap">
          <Solution data={this.state.solutionData} />
        </div>
      </div>
    );
  }
}

export default PagePart;