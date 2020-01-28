import React, {
  Component
} from 'react'

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
      <div className="page_part_2">
        <div className="content_wrap py_100 clearfix">
          <div className="w_50 float_left">
            <img className="logoImg" src={require("../../../images/logo_gray.png")} alt="yilutong,壹路通"/>
          </div>

          <div className="w_50 float_left">
            <div>
              <h3 className=" mr_25 mb_20 font_size32 color_4d">关于我们</h3>
              <p className="mb_100 font_size22 color_80 font_lighter line_height20 text_justify">
                壹路通，隶属于上海路回信息科技有限公司，全球领先的智能车辆服务平台；帮助企业伙伴为超过2000万用户提供了一站式车后服务，同时为企业提供定制化的互联网增值服务。在壹路通平台，超过50000中国汽车服务商实现与客户即时互通互联，不断提升产能并获得新业务增长机会。壹路通致力于与汽车服务商、企业伙伴以及广泛的社会资源合作，在汽车科技领域持续投入和创新，共同构建面向未来汽车消费场景的智能、安全、高效的车后服务生态，让企业更懂用户，让汽车服务成为美好生活的一部分。
              </p>
            </div>
            <div>
              <h3 className=" mr_25 mb_20 font_size32 color_4d">企业使命</h3>
              <p className="mb_100 font_size22 color_80 font_lighter line_height20 text_justify">
                打造车主、企业和服务商共享共赢的车辆服务生态，为企业客户赋能，为服务商增效, 为车主提供极致服务体验。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;