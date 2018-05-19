'use strict';

var _gulpShell = require('gulp-shell');

var _gulpShell2 = _interopRequireDefault(_gulpShell);

var _through = require('through2');

var through = _interopRequireWildcard(_through);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (opts) {
	if (Object.keys(opts).length === 0) {
		opts = {
			quiet: false
		};
	}

	return through.obj(function (file, encoding, cb) {
		if (file.isNull() || file.isStream()) {
			return cb();
		}

		_gulpShell2.default.task(['pylint ' + file.path + ' -f parseable'], opts)();
		cb();
	});
};
