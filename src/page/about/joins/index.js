import React, {
  Component
} from 'react'
import CommonHeader from '../../../component/header';
import CommonFooter from '../../../component/footer';
import Part1 from './part_1';
import Part2 from './part_2';
import Part3 from './part_3';
import PartForm from './part_form';

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
    document.title = "合作加盟";
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
      <div className="about_joins">
        <CommonHeader model="2" position="4"/>
        <Part1 />
        <Part2 />
        <Part3 />
        <PartForm />
        <CommonFooter />
      </div>
    );
  }
}

export default Service;