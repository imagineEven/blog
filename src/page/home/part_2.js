import React, {
  Component
} from 'react';

class PagePart extends Component {
  ecologyMapTimer = null;
  ecologyMapContext = new Array(3); //canvas 对象
  ecologyMapInnerImg = new Array(3); //内部三个图片
  ecologyMapOutImg = new Array(9); //外部九个图片
  ecologyMapLine = []; //虚线

  //页面跳转
  //绘制车辆服务生态图
  structureEcologyMap() {
    let _this = this;
    for (var i = 0; i < _this.ecologyMapContext.length; i++) {
      let e_canvas = _this.refs["ecologyMap" + (i + 1)];
      let e_context = e_canvas.getContext("2d");
      _this.ecologyMapContext[i] = e_context;
      _this.ecologyMapContext[i].translate(700, 700);
    }
    _this.drawEcologyMapImage();
  }
  //绘制图片
  drawEcologyMapImage() {
    let _this = this;
    let e_context = this.ecologyMapContext[2];
    let img = new Image();
    img.src = require("../../images/other/home_eco_logo.png");
    img.onload = function() {
      e_context.drawImage(img, -255, -255, 510, 510);
    };
    //内侧图片
    for (let i = 0; i < _this.ecologyMapInnerImg.length; i++) {
      _this.ecologyMapInnerImg[i] = new Image();
      _this.ecologyMapInnerImg[i].src = require(("../../images/other/home_eco_inner" + i + ".png"));
      _this.ecologyMapInnerImg[i].index = i;
      let deg = (120 * _this.ecologyMapInnerImg[i].index - 90) * (Math.PI / 180);
      let x = 255 * Math.cos(deg) - 130;
      let y = 255 * Math.sin(deg) - 130;
      _this.ecologyMapInnerImg[i].deg = deg;
      _this.ecologyMapInnerImg[i].px = x;
      _this.ecologyMapInnerImg[i].py = y;
      _this.ecologyMapInnerImg[i].centerX = x + 130;
      _this.ecologyMapInnerImg[i].centerY = y + 130;
      _this.ecologyMapInnerImg[i].onload = function() {
        e_context.drawImage(this, this.px, this.py, 260, 260);
      };
    }
    //外部图片
    let colorList = ["#fbbf28", "#ef402a", "#0b6fef", "#0defd3", "#f68422", "#47d1fd", "#14efd4", "#fd0047", "#4006fb"]
    for (let j = 0; j < _this.ecologyMapOutImg.length; j++) {
      _this.ecologyMapOutImg[j] = new Image();
      _this.ecologyMapOutImg[j].src = require(("../../images/other/home_eco_out" + j + ".png"));
      _this.ecologyMapOutImg[j].index = j;
      let deg = (40 * _this.ecologyMapOutImg[j].index - 150) * (Math.PI / 180);
      let x = 600 * Math.cos(deg) - 80;
      let y = 600 * Math.sin(deg) - 80;
      _this.ecologyMapOutImg[j].deg = deg;
      _this.ecologyMapOutImg[j].px = x;
      _this.ecologyMapOutImg[j].py = y;
      _this.ecologyMapOutImg[j].centerX = x + 80;
      _this.ecologyMapOutImg[j].centerY = y + 80;
      _this.ecologyMapOutImg[j].lineColor = colorList[j];
      _this.ecologyMapOutImg[j].onload = function() {
        e_context.drawImage(this, this.px, this.py, 160, 160);
      };
    }
    _this.drawEcologyMapLine();
  }
  //绘制线条
  drawEcologyMapLine() {
    let _this = this;
    //内部圈
    let e_context = this.ecologyMapContext[0];
    e_context.setLineDash([10, 10]);
    e_context.lineWidth = 2;
    e_context.strokeStyle = "rgb(239,164,12)";
    e_context.lineCap = 'round';
    e_context.beginPath(); //开始一个新的路径
    e_context.arc(0, 0, 255, 0, 2 * Math.PI, false);
    e_context.stroke();
    // 线条偏移量
    let lineH = {
      "00": 280,
      "01": 150,
      "02": -150,
      "03": -280,
      "13": 280,
      "14": 150,
      "15": 150,
      "16": 280,
      "26": -280,
      "27": -150,
      "28": -150,
      "20": -280,
    }
    //贝瑟尔曲线 绘制
    for (let i = 0; i < _this.ecologyMapInnerImg.length; i++) {
      let start = _this.ecologyMapInnerImg[i];
      for (var j = 0; j < 4; j++) {
        let t = 3 * i + j;
        t = t % 9;
        let end = _this.ecologyMapOutImg[t];
        e_context.beginPath();
        e_context.moveTo(start.centerX, start.centerY);
        let x0 = start.centerX,
          y0 = start.centerY,
          x1 = end.centerX,
          y1 = end.centerY;
        // 计算控制节点
        let c0 = (x0 + x1) / 2,
          c1 = (y0 + y1) / 2;
        let h = lineH[i + "" + t];
        let k = -1 * (x0 - x1) / (y0 - y1);
        let deg = Math.atan(k);
        let px = c0 + h * Math.cos(deg);
        let py = c1 + h * Math.sin(deg);
        e_context.quadraticCurveTo(px, py, end.centerX, end.centerY);
        e_context.lineWidth = 5;
        e_context.setLineDash([5, 20]);
        e_context.strokeStyle = end.lineColor;
        e_context.stroke();
        _this.ecologyMapLine.push({
          form: i,
          to: t,
          begin: [x0, y0],
          control: [px, py],
          end: [x1, y1],
          timeLength: 1000,
          timeStart: parseInt(Math.random() * 800),
          timeSpeed: 10,
          color: end.lineColor
        })
      }
    }
    e_context.save();
    clearInterval(_this.ecologyMapTimer);
    _this.ecologyMapTimer = setInterval(function() {
      _this.moveEcologyMapLine();
    }, 20)
  }
  moveEcologyMapLine() {
    // 点的动画效果
    let _this = this;
    let e_context = this.ecologyMapContext[1];
    e_context.clearRect(-700, -700, 1400, 1400);
    for (var i = 0; i < _this.ecologyMapLine.length; i++) {
      let item = _this.ecologyMapLine[i];
      let t = item.timeStart / item.timeLength;
      for (var j = 0; j < 4; j++) {
        t += 0.2 * j;
        t = t % 1;
        let x = Math.pow((1 - t), 2) * item.begin[0] + 2 * t * (1 - t) * item.control[0] + Math.pow(t, 2) * item.end[0];
        let y = Math.pow((1 - t), 2) * item.begin[1] + 2 * t * (1 - t) * item.control[1] + Math.pow(t, 2) * item.end[1];
        e_context.fillStyle = item.color;
        e_context.fillRect(x - 4, y - 4, 8, 8);

      }
      //绘制成矩形
      item.timeStart = (item.timeStart + item.timeSpeed) % item.timeLength;
    }
  }
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
    this.state = {
      chatMessage: ''
    };
  }
  componentWillMount() {}
  componentDidMount() {
    this.structureEcologyMap();
  }
  componentWillReceiveProps() {
    //props更新
    //约1s 调用一次
  }
  componentWillUnmount() {
    let _this = this;
    clearInterval(_this.ecologyMapTimer);
    _this.ecologyMapTimer = null;
    //组件删除    
    return false
  }

  render() {
    return (
      <div className="vw_100">
        <div className="home_part_2">
          <div className="content_wrap">
            <div className="w_100 flexbox items_center">
              <div className="w_50 flex_0 line_wrap">
                <div style={{"width":"90%"}}>
                  <h3 className="mb_80 font_size46 color_4d font_bolder">车辆服务生态</h3>
                  <div className="mb_40 pl_20 font_size18 color_4d line_height12 font_lighter interacte_message">为企业客户承接一站式车后服务和各类增值服务，建立企业与用户的高频互动和精准触达</div>
                  <div className="mb_40 pl_20 font_size18 color_4d line_height12 font_lighter interacte_message">车主在线发起各类车主服务，尊享各类权益和福利，统一管理自己的保单和各类汽车服务</div>
                  <div className="mb_40 pl_20 font_size18 color_4d line_height12 font_lighter interacte_message">壹路通为服务商提供智能调度、运能交易、车队管理等服务，帮助服务商数字化业务流程，扩展业务，降低成本，增加收益</div>
                </div>
              </div>
              <div className="w_50 flex_0 text_center ">
                {/*<img src={require("../../images/other/home_eco_map.png")} alt="yilutong,壹路通"/>*/}
                <div className="mx_auto w_80 relative">
                  <canvas ref="ecologyMap1" className="w_100" width="1400" height="1400"></canvas>
                  <canvas ref="ecologyMap2" className="w_100 absolute_lt" width="1400" height="1400"></canvas>
                  <canvas ref="ecologyMap3" className="w_100 absolute_lt" width="1400" height="1400"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePart;