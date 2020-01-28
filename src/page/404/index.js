import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';
import CommonHeader from '../../component/header';
import CommonFooter from '../../component/footer';

class Nofound extends Component {
  //方法

  //页面跳转
  historyBack(el) {
    window.history.go(-1);
    el.preventDefault();
    return false;
  }

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {
    document.title = "404";
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
        <CommonHeader model="2" position="6"/>
        <div className="content-wrap">
          <div className="mx_auto mt_200 mb_100 no_found">
            <img className="w_100" src={require("../../images/404.png")} alt="yilutong,壹路通"/>
            <p className="mt_40 mb_40 font_size35 color_80 text_center">很抱歉~您要查看的不存在或已删除！</p>
            <div className="text_center font_size22 color_fff">
              <Link to="/home" className="inline_block mx_100 py_15 px_30 border_radius_4 background_orange pointer">返回首页</Link>
              <Link to="/home" onClick={(el) => this.historyBack(el)} className="inline_block mx_100 py_15 px_30 border_radius_4 background_80 pointer">返回上一页</Link>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>
    );
  }
}

export default Nofound;