import React, {
  Component
} from 'react';

import {
  // BrowserRouter,
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import home from "../page/home"
import no_match from "../page/404"
import product_data from "../page/product/data"
import product_carowner from "../page/product/carowner"
import product_devDocument from "../page/product/carowner/devDocument"
import product_transcar from "../page/product/transcar"
import product_survey from "../page/product/survey"
import product_devOps from "../page/product/devOps"
import product_carfleet from "../page/product/carfleet"
import product_storemanage from "../page/product/storeManage"
import industry_merchant from "../page/industry/merchant"
import industry_insurance from "../page/industry/insurance"
import industry_bank from "../page/industry/bank"
import industry_carfactory from "../page/industry/carfactory"
import industry_provider from "../page/industry/provider"
import technology_intelligence from "../page/technology/intelligence"
import technology_image from "../page/technology/image"
import technology_voice from "../page/technology/voice"
import technology_security from "../page/technology/security"
import about_introduce from "../page/about/introduce"
import about_joins from "../page/about/joins"
import about_law from "../page/about/law"
import about_report from "../page/about/report"
import about_recruit from "../page/about/recruit"
import about_contactus from "../page/about/contactus"


import ScrollToTop from "../component/scrollToTop"
/*
BrowserRouter 可以替换 hashRouter 但是要配置单独的服务器 
（注意 pageage.json 内的 "homepage": "/"）
起服务
    方法1 serve -s （serve -l 端口号 -s）
    方法2 node app.js 


hashRouter 使用简单配置 /pageName 即可 （注意 pageage.json 内的 "homepage": "./"）

_this.props.history.push({
  pathname: ('/' + (router || '')),
  search: params
});
针对params URL 参数 可以使用 window.location.search / this.props.location.search;
优缺点：this.props.location.search 一定能拿到 但是中途对param 操作的结果拿不到
       window.location.search 使用hashRouter；url这种 #? 形式拿不到 
*/

class RouteLink extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/home" component={home} />
          <Route exact path="/home/:id" component={home} />
          <Route exact path="/product/data" component={product_data} />
          <Route exact path="/product/carowner" component={product_carowner} />
          <Route exact path="/product/devDocument" component={product_devDocument} />
          <Route exact path="/product/transcar" component={product_transcar} />
          <Route exact path="/product/survey" component={product_survey} />
          <Route exact path="/product/DevOps" component={product_devOps} />
          <Route exact path="/product/carfleet" component={product_carfleet} />
          <Route exact path="/product/storeManage" component={product_storemanage} />
          <Route exact path="/industry/merchant" component={industry_merchant} />
          <Route exact path="/industry/insurance" component={industry_insurance} />
          <Route exact path="/industry/bank" component={industry_bank} />
          <Route exact path="/industry/carfactory" component={industry_carfactory} />
          <Route exact path="/industry/provider" component={industry_provider} />
          <Route exact path="/technology/intelligence" component={technology_intelligence} />
          <Route exact path="/technology/image" component={technology_image} />
          <Route exact path="/technology/voice" component={technology_voice} />
          <Route exact path="/technology/security" component={technology_security} />
          <Route exact path="/about/introduce" component={about_introduce} />
          <Route exact path="/about/joins" component={about_joins} />
          <Route exact path="/about/law" component={about_law} />
          <Route exact path="/about/report" component={about_report} />
          <Route exact path="/about/report/:id" component={about_report} />
          <Route exact path="/about/recruit" component={about_recruit} />
          <Route exact path="/about/contactus" component={about_contactus} />
          <Route component={no_match} />
        </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
export default RouteLink;