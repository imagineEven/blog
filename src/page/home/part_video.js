import React, {
  Component
} from 'react'

class PartVideo extends Component {
  //方法
  //关闭视频
  hideVideo() {
    this.props.hideVideoCallback();
  }
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
      <div className="fixed_lt w_100 vh_100 background_black80 promotional_video" style={{"zIndex":'150'}}>
        <div className="absolute_center">
          {/* 图标库 */}
          <i className="iconfont absolute_rt font_size16 color_333 text_center pointer" onClick={this.hideVideo.bind(this)}>&#xe682;</i>
          <div className="video_wrap">
            <video className="w_100 h_100" src="http://one-road-voice.oss-cn-hangzhou.aliyuncs.com/yilutong.mp4" poster={require("../../images/promotional_video_bg_img.jpg")} controls="controls"></video>
          </div>
        </div>
      </div>
    );
  }
}

export default PartVideo;