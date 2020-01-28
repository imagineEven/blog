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
          <p className="font_size18 color_80 font_lighter line_height15">我们针对保险公司各个业务环节提供降本提效解决方案。从前端营销推广、中端技术风控<br className="line_br"/>到后端理赔和客服，通过降低运营成本、提高服务效率来增加利润，从而摆脱单一的<br className="line_br"/>费率大战和同质化竞争压力，建立可持续、差异化客户服务能力。</p>
        </div>
        <div className="content_wrap">
          <Solution data={this.state.solutionData} />
        </div>
      </div>
    );
  }
}

export default PagePart;