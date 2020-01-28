import React, {
  Component
} from 'react'
import CommonHeader from '../../../component/header';
import CommonFooter from '../../../component/footer';
import Part1 from './part_1';
import Part2 from './part_2';
import Part3 from './part_3';
import $http from '../../../config/http.js';

class Service extends Component {
  //方法 列表进入详情
  newsListChangeDetail(nowProps) {
    let _this = this;
    let hashPath = nowProps.location.pathname,
      newsId = 0;
    if (hashPath.indexOf("/about/report/") > -1) {
      newsId = hashPath.replace("/about/report/", '');
    }
    let contentHtml = (<Part2 data={_this.state.newsList}/>);
    if (newsId) {
      contentHtml = (<Part3 id={newsId} data={_this.state.newsList}/>);
    }
    this.setState({
      contentHtml: contentHtml
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      contentHtml: ''
    };
  }
  componentWillMount() {}
  componentDidMount() {
    document.title = '媒体报道';
    let _this = this;
    $http.getNewsList({}, function(Result) {
      if (Result.data && Result.data.length > 0) {
        _this.setState({
          newsList: Result.data
        }, function() {
          _this.newsListChangeDetail(this.props);
        })
      }
    })
  }
  componentWillReceiveProps(nextProps) {
    //props更新
    //约1s 调用一次
    this.newsListChangeDetail(nextProps)
  }
  componentWillUnmount() {
    //组件删除    
    return false
  }

  render() {
    return (
      <div className="about_report">
        <CommonHeader model="2" position="5"/>
        <Part1 />
        {this.state.contentHtml}
        <CommonFooter />
      </div>
    );
  }
}

export default Service;