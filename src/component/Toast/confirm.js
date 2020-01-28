import React, { Component } from 'react'

class Confirm extends Component {
  constructor(props){
    super(props);
    var content = "出错了，请刷新页面重试！";
    if(props.content){
    	content = props.content;
    }
    var btnText = '确定,取消';
    if(props.btnText){
    	btnText = props.btnText.split(",");
    }
    this.state = {
    	title:'提示',
    	content:content,
    	btnText:btnText,
    	success:function(){
    		props.onSuccess && props.onSuccess(true);
    	},
        fail:function(){
            props.onSuccess && props.onSuccess(false);
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
			 				<button type="button" className="layer-success" onClick={this.state.success} >{this.state.btnText[0]}</button>
                            <button type="button" className="layer-cancel" onClick={this.state.fail} >{this.state.btnText[1]}</button>
			 			</div>
			 		</div>
			 	</div>
			</div>
		</div>

    );
  }
}

export default Confirm;