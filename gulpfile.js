var fs = require('fs');
var gulp = require('gulp');
var rename = require('gulp-rename');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var minifyCss = require('gulp-minify-css');
var argv = require('minimist')(process.argv.slice(2));
var cwd = "src/",task = "src";
if(argv._&&argv._.length>0&&argv._[0]=='ui'){
    task=argv.s?"src":"min";
}
var file = {
    reset:{
        less:["src/reset.less"]
    },
    ui:{
        js:["src/ui/**/*.js"],
        less:["src/ui/**/*.less"],
        css:["src/ui/**/*.css"]
    }
};
//for demo
gulp.task('css:reset',function() {
    return gulp.src(file.reset.less)
        .pipe(less())
        .pipe(rename(function(path){
            path.extname = ".css";
            return path;
        }))
        .pipe(gulp.dest("src/"));
});
gulp.task('css:ui',function() {
    return gulp.src(file.ui.less)
        .pipe(less())
        .pipe(rename(function(path){
            path.extname = ".css";
            return path;
        }))
        .pipe(gulp.dest("src/ui/"));
});
gulp.task('js:ui',function() {
    gulp.src(file.ui.js).
        pipe(gulpif(task=="min",uglify())).
        pipe(gulp.dest('./ui/'));
});
gulp.task('watch', function() {
    gulp.watch(file.ui.less, ['css:reset',"css:ui"]);
});
gulp.task('local',['css:reset',"css:ui","watch"]);
//build
gulp.task('build',["js:ui","css:ui"],function(){
    gulp.src(file.ui.css).
        pipe(gulpif(task=="min",minifyCss({noAdvanced: true,rebase: false}))).
        pipe(gulp.dest('./ui/'));
});