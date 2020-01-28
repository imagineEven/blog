## 前言
官网我就要开发，
我就要用react
你看着办吧


## 源码说明
### 项目目录说明
```
|-- build							   // 项目生成地址
|-- public							 // 公共文件
|-- src                              // 源码目录
|   |-- components                   // 公共组件
|       |-- header.vue               // 页面头部公共组件
|   |-- config                       // 路由配置和程序的基本信息配置
|       |-- routes.js                // 配置页面路由
|   |-- css                          // 各种css文件
|       |-- common.css               // 全局通用css文件
|   |-- iconfont                     // 各种字体图标
|   |-- images                       // 公共图片
|   |-- pages                        // 页面组件
|       |-- home                     // 网站页面
|       |-- product                     
|       |-- industry                     
|       |-- technology                     
|       |-- about                     
|   |-- store                        // vuex的状态管理
|       |-- index.js                 // 加载各种store模块
|       |-- user.js                  // 用户store
|   |-- template                     // 各种html文件
|       |-- index.html               // 程序入口html文件
|   |-- util                         // 公共的js方法，vue的mixin混合
|   |-- app.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- .babelrc                         // ES6语法编译配置
|-- package.json                     // 配置项目相关信息，通过执行 npm init 命令创建
.
```

### 生产模块依赖说明
#### 
```
react                                 // 构建用户界面的
react-router-dom                      // 路由
react-axios                           // 组件状态管理
fullpage-react						            // 首页 fullpage (npm i fullpage-react --save)
	--使用注意 防止影响其他 a 路由跳转添加active
	--所在 \node_modules\react-fullpage\dist\SectionsContainer.js
	--操作 line 99;line 105定义 activeLinks (document.)加 querySelector(".full_page_wrap") 自己定义fullpage类
	--目的 防止页面其他路由影响添加active
	--自定义选择点样式 navigationAnchorClass 首次加载 \node_modules\react-fullpage\dist\SectionsContainer.js
	--line 290 
        var className = '';
        if (_this.props.navigationAnchorClass) {
          className = _this.props.navigationAnchorClass;
          if (_this.state.activeSection === index) {
            className += " active"
          }
        }
       line 293
        className: className || 'Navigation-Anchor',

  --由于底部导航不足一屏 插件优化
  --所在 \node_modules\react-fullpage\dist\SectionsContainer.js
  --line 149;line 159 重新计算positon

  line 149 +    
      if (_this.state.activeSection === (_this.props.anchors.length - 1)) {
        var bottomH = window.innerHeight;;
        if (document.querySelector(".full_page_wrap").querySelector(".footer-wrap")) {
          bottomH = document.querySelector(".footer-wrap").clientHeight;
        }
        position = 0 - (_this.state.activeSection - 1) * window.innerHeight - bottomH - parseInt(_this.props.sectionPaddingTop);
      }

  line 159 + 
      if (index === (_this.props.anchors.length - 1)) {
        var bottomH = _this.state.windowHeight;
        if (document.querySelector(".full_page_wrap").querySelector(".footer-wrap")) {
          bottomH = document.querySelector(".footer-wrap").clientHeight;
        }
        position = 0 - (index - 1) * _this.state.windowHeight - bottomH - parseInt(_this.props.sectionPaddingTop);
      }



video-react							  // 视频 (npm install –save video-react)
```

### 页面说明
```
/                                     // 首页，不需要登录可以访问
```
### 路由方法 BrowserRouter/hashRouter

BrowserRouter 可以替换 hashRouter 但是要配置单独的服务器 
（注意 pageage.json 内的 "homepage": "/"）
  起服务
    方法1 npm install -g serve  => serve -s （serve -l 端口号 -s）
    方法2 node app.js
    方法3 Nginx 代理 （React项目从创建到打包到云服务器指南：https://segmentfault.com/a/1190000011085024）

hashRouter 使用简单配置 /pageName 即可 
（注意 pageage.json 内的 "homepage": "./"）

### 运行程序 
```
npm install      //布置环境
npm run start    //起服务
npm run build	   //生成文件
http://localhost:8116
```