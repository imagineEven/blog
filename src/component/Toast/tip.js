import React, {
  Component
} from 'react'

class Tip extends Component {
  constructor(props) {
    super(props);
    var text = "加载中";
    if (props.title) {
      text = props.title;
    }
    this.state = {
      content: text,
      close: function() {
        props.onClose && props.onClose();
      }
    }
  }
  render() {
    return (
      <div>
			<div className="layer-shadow" style={{background:'transparent'}} onClick={this.state.close}></div>
			<div className="layer-wrap">
			 	<div className="layer-content">
			 		<div className="layer-tip">{this.state.content}</div>
			 	</div>
			</div>
		</div>
    );
  }
}

export default Tip;