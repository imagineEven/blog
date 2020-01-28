import React, { Component } from 'react'

class Alert extends Component {
  constructor(props){
    super(props);
    var content = "出错了，请刷新页面重试！";
    if(props.content){
    	content = props.content;
    }
    var btnText = '确定';
    if(props.btnText){
    	btnText = props.btnText;
    }
    this.state = {
    	title:'提示',
    	content:content,
    	btnText:btnText,
    	success:function (argument) {
    		props.onSuccess && props.onSuccess();
    	}
    }
  }
  render() {
    return (
    	<div>
			<div className="layer-shadow"></div>
			<div className="layer-wrap">
			 	<div className="layer-content">
			 		<div className="layer-inner">
			 			<h3 className="layer-title">{this.state.title}</h3>
			 			<div className="layer-message">{this.state.content}</div>
			 			<div className="layer-btn">
			 				<button type="button" className="layer-success" onClick={this.state.success} style={{width:'100%'}}>{this.state.btnText}</button>
			 			</div>
			 		</div>
			 	</div>
			</div>
		</div>
    );
  }
}

export default Alert;