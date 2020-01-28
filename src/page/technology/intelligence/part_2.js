import React, {
  Component
} from 'react'

import pageData from "./pageData.json";
import Features from '../../../component/technology/features';

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
        <div className="py_80 text_center">
          <h2 className="mb_25 font_size50 color_4d ">技术特色</h2>
          <p className="font_size22 color_80 font_lighter line_height15">
            AI大脑是壹路通复杂系统的决策中心，每2秒进行一次全局判断，<br className='line_br'/>通过大数据、机器学习和云计算最大化利用交通运力，做出最优决策。
          </p>
        </div>
        <Features data={this.state.features}/>
      </div>
    );
  }
}

export default PagePart;