import React, {
  Component
} from 'react'

class Features extends Component {
  //方法
  //构造产品特色html
  structureFeaturesHtml(listData) {
    let html = listData.map(function(item, index) {
      let pullLeftFlag = '';
      if (index % 2 === 1) {
        pullLeftFlag = ' flex_reverse'
      }
      let banner = require(("../../" + item.banner));
      let describeList = [];
      if (item.list && item.list.length > 0) {
        describeList = item.list.map(function(item2, index2) {
          return (
            <div key={index2}>
              <h5 className="mb_10 font_size22 color_4d">{item2.title}</h5>
              <p className="mb_15 font_size22 color_80 font_lighter line_height15 text_justify">{item2.describe}</p>
            </div>
          );
        })
      } else {
        describeList = (<p className="mb_15 font_size22 color_80 font_lighter line_height15">{item.describe}</p>);
      }
      return (
        <div className={"flexbox items_center part"+ pullLeftFlag } key={index}>
          <div className="w_50 flex_grow">
            <img className="w_100" src={banner} alt="yilutong,壹路通"/>
          </div>
          <div className="w_50 flex_0 vertical_flex_center">
            <div className="mx_auto w_max_80">
              <h4 className="mb_25 font_size32 color_4d">{item.title}</h4>
              {describeList}
            </div>
          </div>
        </div>
      );
    })
    this.setState({
      listHtml: html
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      listData: props.data,
      listHtml: [],
    };
  }
  componentWillMount() {}
  componentDidMount() {
    let listData = this.state.listData;
    this.structureFeaturesHtml(listData)
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
        <div className="content-wrap">
          <div className="technology_features_wrap">
          {this.state.listHtml}
          </div>
        </div>
      </div>
    );
  }
}

export default Features;