# Gulp Pylint

A gulp task runner that runs Pylint.

## Getting Started

### Prerequisites

Install pylint on your machine if you don't already have it. You can get more details [here](https://www.pylint.org/#install)

```
pip install pylint
```

### How to use this

Add the below to your gulpfile:

```
import gulp from 'gulp';
import PyLint from 'gulp-pylint';

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

This project is licensed under the MIT License