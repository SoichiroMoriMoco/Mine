//プラグインの読み込み
const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');

//タスクの設定（定義）
//タスク１ - Sassのコンパイル
gulp.task('sass', () => {
return gulp.src('./scss/**/**/*.scss', { base: './scss' })
.pipe(sass({
outputStyle: 'expanded' //通常の見た目にしたい場合はexpanded 圧縮はcompact
}))
.pipe(gulp.dest('./dest/assets/css'));
});

gulp.task('connect', function() {
  connect.server({
    root: './dest',
    livereload: true
  });
});

//タスク２ - ファイルを監視する（ファイルに変更があれば、タスク１を行う）
gulp.task('watch', () => {
gulp.watch('scss/**/*.scss', gulp.series(['sass']));
});

//デフォルトタスクに、タスク２を設定
gulp.task('default', gulp.parallel(['connect', 'watch'], () => {

}));