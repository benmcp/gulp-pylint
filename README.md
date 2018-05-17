# Gulp Pylint

A gulp task runner that runs Pylint.

## Getting Started

### Prerequisites

Install pylint on your machine if you don't already have it. You can get more details [here](https://www.pylint.org/#install)

```
pip install pylint
```

### Installing

Then add the below to your gulpfile.js file:

```
import gulp from 'gulp';
import shell from 'gulp-shell';
import PyLint from './src/index.js';

gulp.task("pylint", function() {
  gulp.src('test/*.py', {read: true})
    .pipe(PyLint({}));
});
```

## Running the tests

```
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
