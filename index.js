module.exports.get = function(short, long) {
	var value = null;
	var args = typeof require('system').args != 'undefined' ? require('system').args : process.argv;
	for(var i = 0; i < args.length; i++) {
		if(typeof short != 'undefined') {
			var regex = new RegExp('^\-' + short + '.*?');
			if(regex.test(args[i])) {
				regex = new RegExp('^\-' + short);
				value = args[i].replace(regex, '');
			}
		}
		if(typeof long != 'undefined') {
			var regex = new RegExp('^\-\-' + long + '.*?');
			if(regex.test(args[i])) {
				regex = new RegExp('^\-\-' + long);
				value = args[i].replace(regex, '');
			}
		}
	}
	for(var i = 0; i < args.length; i++) {
		if(typeof short != 'undefined') {
			if(args[i] == '-' + short && typeof args[(i + 1)] != 'undefined') {
				value = args[(i + 1)];
			}
		}
		if(typeof long != 'undefined') {
			if(args[i] == '--' + long && typeof args[(i + 1)] != 'undefined') {
				value = args[(i + 1)];
			}
		}
	}
	return value;
};

module.exports.getParam = function(url, id) {
		var query = url.substr(url.indexOf('?') + 1);
		var result = {};
		query.split('&').forEach(function(part) {
			var e = part.indexOf('=');
			var key = part.substr(0, e);
			var value = part.substr(e + 1);
			result[key] = decodeURIComponent(value);
		});
		return id ? (typeof result[id] != 'undefined' ? result[id] : result) : result;
	}
};