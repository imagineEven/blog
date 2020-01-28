import React, {
  Component
} from 'react'
import CommonHeader from '../../../component/header';
import CommonFooter from '../../../component/footer';
import Part1 from './part_1';
import Part2 from './part_2';

class Service extends Component {
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
  componentDidMount() {
    document.title = "语音识别";
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
      <div>
        <CommonHeader model="2"  position="3" />
        <Part1 />
        <Part2 />
        <CommonFooter />
      </div>
    );
  }
}

export default Service;