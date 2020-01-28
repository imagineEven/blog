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
          <p className="font_size18 color_80 font_lighter line_height15">基于车联网、UBI车险、人工智能等未来汽车发展大趋势，为主机厂、二手车商、<br className='line_br'/>汽车电商平台、汽车租赁公司提供完备的智能车辆服务，为企业车主客户<br className='line_br'/>提供最佳汽车服务体验，助力企业打造品牌的终身粉丝。</p>
        </div>
        <div className="content_wrap">
          <Solution data={this.state.solutionData} />
        </div>
      </div>
    );
  }
}

export default PagePart;