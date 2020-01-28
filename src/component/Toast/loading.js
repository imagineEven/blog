import React, { Component } from 'react'

class Loading extends Component {
  constructor(props){
    super(props);
    var text = "加载中";
    if(props.title){
    	text = props.title;
    }    
    this.state = {
    	loadingBool:true,
    	loadingText:text,
    }
  }
  render() {
    return (
		<div className="layer-wrap">
			<div className="layer-content">
				<div className="layer-loading">
					<div className="layer-icon">
						<div className="layer-leaf layer-leaf-0"></div>
						<div className="layer-leaf layer-leaf-1"></div>
						<div className="layer-leaf layer-leaf-2"></div>
						<div className="layer-leaf layer-leaf-3"></div>
						<div className="layer-leaf layer-leaf-4"></div>
						<div className="layer-leaf layer-leaf-5"></div>
						<div className="layer-leaf layer-leaf-6"></div>
						<div className="layer-leaf layer-leaf-7"></div>
						<div className="layer-leaf layer-leaf-8"></div>
						<div className="layer-leaf layer-leaf-9"></div>
						<div className="layer-leaf layer-leaf-10"></div>
						<div className="layer-leaf layer-leaf-11"></div>
					</div>
					<div className="layer-load-msg">{this.state.loadingText}</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Loading;