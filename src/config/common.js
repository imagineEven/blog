var commonObject = {
	//获取URL参数
	getParam: function(name) {
		//先获取#后面的参数
		var getValue = function(name, str) {
			//获取参数name的值
			var reg = new RegExp("(^|!|&|\\?)" + name + "=([^&]*)(&|$)");
			//再获取?后面的参数
			var r = str.match(reg);
			if (r !== null) {
				try {
					return decodeURIComponent(r[2]);
				} catch (e) {
					console.log(e + "r[2]:" + r[2]);
					return null;
				}
			}
			return null;
		};
		var str = document.location.hash.substr(2);
		var value = getValue(name, str);
		if (value == null) {
			str = document.location.search.substr(1);
			value = getValue(name, str);
		}
		return value;
	},
	//设置URL参数
	setParam: function(name, value) {
		var setValue = function(name, value, str) {
			if ((typeof name) === "object") {
				str = value;
				value = name;
				for (var key in value) {
					str = setValue(key, value[key], str);
				}
				return str;
			} else {
				var prefix = str ? "&" : "";
				var reg = new RegExp("(^|!|&|\\?)" + name + "=([^&]*)(&|$)");
				var r = str.match(reg);
				// value = encodeURIComponent(value);
				var newValue = '';
				if (r) {
					if (r[2]) {
						newValue = r[0].replace(r[2], value);
						str = str.replace(r[0], newValue);
					} else {
						newValue = prefix + name + "=" + value + "&";
						str = str.replace(r[0], newValue);
					}
				} else {
					newValue = prefix + name + "=" + value;
					str += newValue;
				}

				return str;
			}
		}
		var search = document.location.search.substr(1);
		search = setValue(name, value, search);
		if (window.history.replaceState) {
			window.history.replaceState({}, null, "?" + search);
		} else {
			console.error("history.replaceState:" + window.history.replaceState);
		}
	},
	//删除URL参数
	removeParam: function(name) {
		var search = document.location.search.substr(1);
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = search.match(reg);
		if (r) {
			if (r[1] && r[3]) {
				search = search.replace(r[0], '&');
			} else {
				search = search.replace(r[0], '');
			}
		}
		if (window.history.replaceState) {
			window.history.replaceState({}, null, "?" + search);
		} else {
			console.error("history.replaceState:" + window.history.replaceState);
		}
	},
	// 重置url
	resetUrl: function(url, changeParams) {
		var paramUrl = url.split("?");
		if (paramUrl.length > 1) {
			paramUrl = paramUrl[1];
		} else {
			paramUrl = url;
		}
		var params = paramUrl.split("&");
		for (var item in changeParams) {
			var addFlag = true;
			for (var i = 0; i < params.length; i++) {
				var param = params[i].split("=");
				if (param[0] === item) {
					addFlag = false;
					if (changeParams[item] || changeParams[item] === 0) {
						param[1] = changeParams[item];
						param = param.join("=");
						params[i] = param;
					} else {
						params[i] = '';
					}
				}
			}
			if (addFlag) {
				if (changeParams[item] || changeParams[item] === 0) {
					params.push(item + "=" + changeParams[item]);
				}
			}
		}
		var newParams = [];
		for (var j = 0; j < params.length; j++) {
			if (params[j]) {
				newParams.push(params[j]);
			}
		}
		return "?" + newParams.join("&");
	},
	//设置本地缓存
	setLocalData: function(key, val) {
		localStorage.setItem(key, JSON.stringify(val))
	},
	//获取本地缓存
	getLocalData: function(key) {
		var value = localStorage.getItem(key);
		if (typeof value !== 'string') {
			return undefined
		}
		try {
			return JSON.parse(value)
		} catch (e) {
			return value || undefined
		}
	},
	//删除本地缓存
	removeLocalData: function(key) {
		localStorage.removeItem(key);
	},
	//		设置本地缓存
	setSessionData: function(key, val) {
		sessionStorage.setItem(key, JSON.stringify(val))
	},
	//获取本地缓存
	getSessionData: function(key) {
		var value = sessionStorage.getItem(key);
		if (typeof value !== 'string') {
			return undefined
		}
		try {
			return JSON.parse(value)
		} catch (e) {
			return value || undefined
		}
	},
	//删除本地缓存
	removeSessionData: function(key) {
		sessionStorage.removeItem(key);
	},
	//获取form参数
	getFormData: function(selector) {
		var data = {};
		var inputALL = document.querySelector(selector).elements;
		for (var i = 0; i < inputALL.length; i++) {
			var item = inputALL[i];
			var key = item.name || item.id;
			if (key) {
				var type = item.type;
				if (type === "checkbox") {
					if (item.checked) {
						if (data[key]) {
							data[key] += "," + (item.value);
						} else {
							data[key] = item.value
						}
					}
				} else if (type === 'radio') {
					if (item.checked) {
						data[key] = item.value;
					}
				} else if (type !== 'submit' && type !== 'button') {
					data[key] = item.value;
				}
			}
		}
		return data;
	},
	//		验证正则
	checkCarNumber: function(value) {
		var reg = /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{7}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/;
		return reg.test(value);
	},
	checkPhoneNumber: function(value) {
		var reg = /^\d{11}$/;
		return reg.test(value);
	},
	//15位和18位身份证号码的正则表达式
	checkPersonNumber: function(idCard) {
		var regIdCard = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/;
		return regIdCard.test(idCard);
	},
	checkData: function(value) {
		var reg = /^([A-Z0-9a-z]+)$/;
		return reg.test(value);
	},
	//验证车架号
	checkVinNo: function(value) {
		var reg = /^([A-Z0-9a-z]{17})$/;
		return reg.test(value);
	},
	//验证油卡(中石化：以100011开头的19位卡号、中石油：以90开头的16位卡号）
	checkOilNumber: function(value) {
		var reg = /(^((100011)[0-9]{13})$)|(^((90)[0-9]{14})$)/;
		return reg.test(value);
	},
	//验证IE
	checkIE: function() {
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
		var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
		var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
		var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
		if (isIE) {
			var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
			reIE.test(userAgent);
			var fIEVersion = parseFloat(RegExp["$1"]);
			if (fIEVersion === 7) {
				return 7;
			} else if (fIEVersion === 8) {
				return 8;
			} else if (fIEVersion === 9) {
				return 9;
			} else if (fIEVersion === 10) {
				return 10;
			} else {
				return 6; //IE版本<=7
			}
		} else if (isEdge) {
			return 'edge'; //edge
		} else if (isIE11) {
			return 11; //IE11  
		} else {
			return -1; //不是ie浏览器
		}
	},
	//微信环境
	checkWXAgent: function() {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) === "micromessenger") {
			return true;
		} else {
			return false;
		}
	},
	//支付宝环境
	checkAliAgent: function() {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.match(/AlipayClient/i) === "alipayclient") {
			return true;
		} else {
			return false;
		}
	},
	//苹果手机
	checkIOS: function() {
		var u = navigator.userAgent;
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		return isiOS;
	},
	checkPC: function() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod"];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		if (window.screen.width >= 768) {
			flag = true;
		}
		return flag;
	},
	//浮点数相乘
	floatMul: function(arg1, arg2) {
		var m = 0,
			s1 = arg1.toString(),
			s2 = arg2.toString();
		try {
			m += s1.split(".")[1].length;
		} catch (e) {}
		try {
			m += s2.split(".")[1].length;
		} catch (e) {}
		return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
	},
	//本地图片处理
	getObjectURL: function(file) {
		var url = null;
		if (window.createObjectURL !== undefined) { // basic
			url = window.createObjectURL(file);
		} else if (window.URL !== undefined) { // mozilla(firefox)
			url = window.URL.createObjectURL(file);
		} else if (window.webkitURL !== undefined) { // web_kit or chrome
			url = window.webkitURL.createObjectURL(file);
		}
		return url;
	},
	convertImgToBase64type: function(url, callback, outputFormat) {
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		var img = new Image();
		img.crossOrigin = 'Anonymous';
		img.onload = function() {
			var width = img.width;
			var height = img.height;
			// 按比例压缩4倍
			var bili = Math.round(width / 450);
			bili = bili ? bili : 1;
			var rate = 1 / bili;
			canvas.width = width * rate;
			canvas.height = height * rate;
			ctx.drawImage(img, 0, 0, width, height, 0, 0, width * rate, height * rate);
			var dataURL = canvas.toDataURL(outputFormat || 'image/jpeg');
			callback.call(this, dataURL);
			canvas = null;
		}
		img.src = url;
	},
	slideDown: function(dom, callback) {
		setTimeout(function() {
			dom.style.display = "block";
			var originHeight = dom.offsetHeight;
			dom.style.height = "0";
			var className = dom.className;
			if (className.indexOf('slideToggle') < 0) {
				dom.className = className + ' slideToggle'
			}
			setTimeout(function() {
				dom.style.height = originHeight + 'px';
			}, 20)
		}, 50)
	},
	slideUp: function(dom, callback) {
		dom.style.height = "0";
		setTimeout(function() {
			dom.style.height = "auto";
			dom.style.display = "none";
			callback && callback();
		}, 420)
	}

}
export default commonObject;