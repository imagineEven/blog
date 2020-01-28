import React, {
  Component
} from 'react'
import commonFn from '../../config/common.js';

class PagePart extends Component {
  timer = null;
  //方法
  creatHomebackgroundVideo() {
    let _this = this;
    let bgvideoWrap = _this.refs.background_video_wrap;
    let bgvideo = _this.refs.background_video;
    let Dh = bgvideoWrap.clientHeight;
    let Dw = bgvideoWrap.clientWidth;
    if ((Dh / 9 * 16) < Dw) {
      bgvideo.style.height = 'auto';
      bgvideo.style.width = '100%';
    } else {
      bgvideo.style.height = '100%';
      bgvideo.style.width = 'auto';
    }
    //设置背景视频 手机端不播放
    if (commonFn.checkPC()) {
      bgvideo.oncanplaythrough = function(e) {
        bgvideo.play();
      }
    }
  }
  //显示宣传视频
  showVideoCallback() {
    this.props.toShowVideo();
  }
  //显示救援
  showJiuyuanAlert() {
    this.props.showQrcodeAlert(5);
  }
  fullPageNext() {
    this.props.fullPageBack("nextPage");
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
    this.creatHomebackgroundVideo = this.creatHomebackgroundVideo.bind(this);
  }
  componentWillMount() {}
  componentDidMount() {
    let _this = this;
    window.addEventListener('resize', _this.creatHomebackgroundVideo);
    clearTimeout(_this.timer)
    _this.timer = null;
    _this.timer = setTimeout(function() {
      _this.creatHomebackgroundVideo();
    }, 20)
  }
  componentWillReceiveProps() {
    //props更新
    //约1s 调用一次
  }
  componentWillUnmount() {
    let _this = this;
    window.removeEventListener('resize', _this.creatHomebackgroundVideo);
    clearTimeout(_this.timer);
    _this.timer = null;
    //组件删除    
    return false;
  }

  render() {
    return (
      <div className="home_part_1">
        <div className="absolute_lb title" style={{"zIndex":'10'}}>
          <h2 className="font_size80 color_fff text_shadow_1">壹路通 <span className="font_size45" style={{"verticalAlign": "23%"}}>|</span> 智慧行</h2>
          <h2 className="font_size50 color_fff font_lighter text_shadow_1 mt_20">领先的智能车辆服务平台</h2>
          <div className="mt_20 btn-wrap font_size0">
            <button className="noappearance py_10 btn_orange font_size20 line_heigh12 mr_40" type="button" onClick={this.showJiuyuanAlert.bind(this)}>紧急救援<i className="iconfont font_size24">&#xe681;</i></button>
            <button className="noappearance py_10 background_1a color_fff font_size20 line_heigh12" type="button" onClick={this.showVideoCallback.bind(this)}>播放完整视频<i className="iconfont font_size24">&#xe681;</i></button>
          </div>
        </div>
        <div ref="background_video_wrap" className="absolute_lt w_100 h_100 overflow_hidden" style={{"zIndex":'1'}}> 
          <video ref="background_video" className="absolute_center bg_video" loop="loop" muted="muted" poster={require("../../images/promotional_video_bg_img.jpg")}>
              <source src="https://one-road.oss-cn-hangzhou.aliyuncs.com/official-home.ogg" type="video/ogg"></source>
              <source src="https://one-road.oss-cn-hangzhou.aliyuncs.com/official-home.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div ref="moveNextBtn" className="absolute_lb w_100 text_center moveNext" style={{"zIndex":"10"}} onClick={this.fullPageNext.bind(this)}>
          <i className="inline_block iconfont wh_40 font_size10 color_fff pointer noselect border_50">&#xe664;</i>
        </div>
      </div>
    );
  }
}

export default PagePart;