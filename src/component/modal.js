import React from 'react';
import ReactDOM from 'react-dom';
// 弹出组件
import Tip from '../component/Toast/tip';
import Loading from '../component/Toast/loading';
import Alert from '../component/Toast/alert';
import Confirm from '../component/Toast/confirm';

var Modal = {
	showTip(value) {
		let body = document.body;
		let showDom = document.createElement("div");
		// 设置基本属性
		showDom.className = "layer layer-show";
		body.appendChild(showDom);
		// 自我删除的方法
		let close = () => {
			ReactDOM.unmountComponentAtNode(showDom);
			body.removeChild(showDom);
		}
		setTimeout(function(argument) {
			close();
		}, 2000)
		ReactDOM.render(
			<Tip title={value} onClose={close} />,
			showDom
		)
	},
	showLoading(domId, value) {
		let body = document.body;
		let showDom = document.createElement("div");
		if (!value) {
			value = domId;
			domId = '';
		}
		// 设置基本属性
		showDom.id = domId;
		showDom.className = "layer layer-toast layer-show";
		body.appendChild(showDom);
		// 自我删除的方法
		let close = () => {
			ReactDOM.unmountComponentAtNode(showDom);
			body.removeChild(showDom);
		}
		ReactDOM.render(
			<Loading title={value} onClose={close} />,
			showDom
		)
	},
	hideLoading(domId) {
		let body = document.body;
		if (domId) {
			let loadingDom = document.getElementById(domId);
			body.removeChild(loadingDom);
			return;
		} else {
			let loadingDom = document.getElementsByClassName('layer-toast');
			for (var i = 0; i < loadingDom.length; i++) {
				body.removeChild(loadingDom[i]);
			}
		}
	},
	showAlert(message, callBack, btnText) {
		let body = document.body;
		let showDom = document.createElement("div");

		// 设置基本属性
		showDom.className = "layer layer-show";
		body.appendChild(showDom);
		// 自我删除的方法
		let close = () => {
			callBack && callBack();
			ReactDOM.unmountComponentAtNode(showDom);
			body.removeChild(showDom);
		}
		ReactDOM.render(
			<Alert content={message} btnText={btnText} onSuccess={close} />,
			showDom
		)
	},
	showConfirm(message, callBack, btnText) {
		let body = document.body;
		let showDom = document.createElement("div");

		// 设置基本属性
		showDom.className = "layer layer-show";
		body.appendChild(showDom);
		// 自我删除的方法
		let close = (Result) => {
			callBack && callBack(Result);
			ReactDOM.unmountComponentAtNode(showDom);
			body.removeChild(showDom);
		}
		ReactDOM.render(
			<Confirm content={message} btnText={btnText} onSuccess={close} />,
			showDom
		)
	}
}

export default Modal;