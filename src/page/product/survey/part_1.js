import React, {
  Component
} from 'react'

class PagePart extends Component {
  //方法
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
      <div className="page_part_1">
        <div className="flexbox page_title_part type2" style={{'backgroundImage':('url('+require("../../../images/banner/top_banner1.jpg")+')')}}>
          <div className="content_wrap">
            <div className="type3">
              <div>
                学习英语时间：9:00-10:00,  上班路上~，临睡觉学习半小时。
              </div>
              <br/>
              <div>
                学习股票时间：1:00-2:00
              </div>
            </div>

            <h1 className="mb_30 font_size55 color_fff">个人规划</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;