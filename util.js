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

