var u = {};

u.type = function type(obj) {
    return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '');
};

u.isArray = function isArray(list) {
	return a.type(list) === 'Array';
};

u.isString = function isString(list) {
	return a.type(list) === 'String';
}

u.each = function each(array,cb) {
	for (var i = 0, len = array.length; i < len; i++) {
		cb(array[i],i); //i為傳入index
	}
};

u.toArray = function toArray(listLike) {
	if(!listLike) {
		return [];
	}
	return Array.prototype.slice.call(arguments);
};

u.setAttr = function setAttr(node,key,value) {
	switch (key) {
		case 'style':
			node.style.cssText = value; 
			break;
		case 'value':
			var tagName = node.tagName || '';
			tagName = tagName.toLowerCase();
			if(tagName === 'input' || tagName === 'textarea') {
				node.value = value;
			} else {
				node.setAttribute(key,value);
			}
			break;
		default:
			node.setAttribute(key,value);
			break;
	}
};

u.ready = function ready(fn) {
	if(document.readyState !== 'loading') {
		fn();
	}else if(document.addEventListener) {
		document.addEventListener('DOMContentLoad',fn);
	}else {
		document.attachEvent('onreadystatechange',function () {
			if(document.readyState !== 'loading') {
				fn();
			}
		})
	}
};

u.ajax = function ajax(url,fn) {
	var req;

	if(window.XMLHttpRequest) { // Mozilla, Safari,chrome
		req = new XMLHttpRequest();
		if(req.overrideMimeType) {
			req.overrideMimeType('text/xml'); //避免部分版本的 Mozilla 瀏覽器，在伺服器送回的資料未含 XML mime-type 檔頭（header）時會出錯。
		}
	} else if (window.ActiveXObject) { //IE
		req = new ActiveXObject('Microsoft.XMLHttp');
	}

	if(!req) {
		console.log('Cannot create an XMLHTTP instance');
	}

	req.onreadystatechange = function () {
		fn(req);
	};

	req.open('GET',url,true); 
		//第三個參數 如果設定為 TRUE 則即使伺服器尚未傳回資料也會繼續執行其餘的程式 
		//存取資料的方式 有兩種 httpRequest.responseText把傳回值視為字串用 跟 httpRequest.responseXML把傳回值視為 XMLDocument 物件
	req.send('');
}

