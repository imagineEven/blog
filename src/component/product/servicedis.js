import React, {
  Component
} from 'react'

class ServiceType extends Component {
  //方法
  //构造产品特色html
  structureHtml(listData) {
    let html = listData.map(function(item, index) {
      return (
        <li className="relative mx_auto font_size18 color_80 font_lighter line_height20" key={index}><span></span>{item}</li>
      )
    })
    this.setState({
      listHtml: html
    })
  }
  constructor(props) {
    super(props);
    let disc = props.data
    this.state = {
      listData: disc.list,
      title: disc.title,
      listHtml: [],
    };
  }
  componentWillMount() {}
  componentDidMount() {
    let listData = this.state.listData;
    this.structureHtml(listData)
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
      <div className="product_service_dis">
        <p className="mb_20 font_size28 color_4d line_height15">{this.state.title}</p>
        <ul>
          {this.state.listHtml}
        </ul>
      </div>
    );
  }
}

export default ServiceType;