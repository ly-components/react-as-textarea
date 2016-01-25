const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const open = require('open');
const path = require('path');
const express = require('express');
const gulp = require('gulp');
const del = require('del');
const env = require('gulp-env');
const insert = require('gulp-insert-md');
const tablify = require('react-prop-table');
const execSync = require('child_process').execSync;
const cmd = command => execSync(command, {
  stdio: 'inherit'
});

gulp.task('clean', cb => del(['dist'], cb));

gulp.task('clean-test', cb => del(['coverage'], cb));

gulp.task('build', ['clean'], () => {
  return gulp.src('./src/index.jsx')
    .pipe(env.set({
      NODE_ENV: 'production'
    }))
    .pipe(gulpWebpack(require('./webpack.pub')))
    .pipe(gulp.dest('dist'));
});

gulp.task('demo', () => {
  return gulp.src('./demo/index.jsx')
    .pipe(env.set({
      NODE_ENV: 'demo'
    }))
    .pipe(gulpWebpack(require('./webpack.dev')))
    .pipe(gulp.dest('demo'));
});

gulp.task('dev', cb => {
  env({
    NODE_ENV: 'development'
  });
  const config = require('./webpack.dev');
  const app = express();
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'demo', 'index.html'));
  });
  app.listen(3000, 'localhost', function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Listening at http://localhost:3000');
    open('http://localhost:3000');
    cb();
  });
});

gulp.task('pre-test', ['clean-test'], () => {
  return gulp.src('./test/test.jsx')
    .pipe(env.set({
      NODE_ENV: 'test'
    }))
    .pipe(gulpWebpack(require('./webpack.test')))
    .pipe(gulp.dest('test'));
});

gulp.task('test', ['pre-test'], () => {
  cmd('./node_modules/.bin/mocha-phantomjs ./test/test.html');
});

gulp.task('coverage', ['pre-test'], () => {
  cmd('./node_modules/.bin/mocha-phantomjs ./test/test.html --hooks ./node_modules/mocha-phantomjs-coverage-hook/index.js');
  cmd('./node_modules/.bin/istanbul report --root coverage lcov');
  cmd('./node_modules/.bin/istanbul report --root coverage text-summary');
});

gulp.task('doc', function() {
  return gulp.src(['README.md'])
    .pipe(insert({
      doc: (content, cb) => cb(tablify.markdown(content))
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['pre-test', 'build', 'doc', 'demo']);
