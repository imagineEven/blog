import React, {
  Component
} from 'react'

class Features extends Component {
  //方法
  //构造产品特色html
  structureFeaturesHtml(listData) {
    let html = listData.map(function(item, index) {
      let innerHrml = item.map(function(item2, index2) {
        let part_w = (100 / item.length) + "%";
        return (
          <div className="flex_grow px_10 text_center" key={index2} style={{"width":part_w}}>
            <i className="iconfont font_size60 color_orange" dangerouslySetInnerHTML={{__html: item2.icon || ''}}></i>
            <h4 className="mt_20 mb_15 font_size26 color_4d">{item2.title || ''}</h4>
            <p className="font_size16 color_80 line_height15" dangerouslySetInnerHTML={{__html: item2.describe || ''}}></p>
          </div>)
      })
      return (
        <div className="mx_auto pb_80 flexbox" key={index}>{innerHrml}</div>
      )
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
    this.structureFeaturesHtml(listData.list)
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
      <div className="product_features">
        <h3 className="py_100 mx_auto font_size50 color_4d text_center">{this.state.listData.title}</h3>
        <div className="content-wrap">
          <div className="mx_auto inner_content_wrap">
            {this.state.listHtml}
          </div>
        </div>
      </div>
    );
  }
}

export default Features;