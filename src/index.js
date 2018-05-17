import shell from 'gulp-shell';
import * as through from 'through2';

module.exports = (opts) => {

	if (Object.keys(opts).length === 0) {
	  opts = {
	  	quiet: false
	  };
	}

  return through.obj((file, encoding, cb) => {

	  if (
	  	file.isNull() ||
	  	file.isStream()
  	) {
	    return cb();
	  }

		shell.task(
			[`pylint ${file.path} -f parseable`], 
			opts
		)();
	  cb();
	});
}
