var fs = require('fs');
var gulp = require('gulp');
var rename = require('gulp-rename');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var minifyCss = require('gulp-minify-css');
var argv = require('minimist')(process.argv.slice(2));
var task = "src";
if(argv._&&argv._.length>0&&argv._[0]=='build'){
    task=argv.s?"src":"min";
}
var file = {
    reset:{
        less:["src/reset.less"]
    },
    components:{
        js:["src/components/**/*.js"],
        less:["src/components/**/*.less"],
        css:["src/components/**/*.css"]
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
gulp.task('css:components',function() {
    return gulp.src(file.components.less)
        .pipe(less())
        .pipe(rename(function(path){
            path.extname = ".css";
            return path;
        }))
        .pipe(gulp.dest("src/components/"));
});
gulp.task('js:components',function() {
    gulp.src(file.components.js).
        pipe(gulpif(task=="min",uglify())).
        pipe(gulp.dest('./components/'));
});
gulp.task('watch', function() {
    gulp.watch(file.components.less, ['css:reset',"css:components"]);
});
gulp.task('local',['css:reset',"css:components","watch"]);
//build
gulp.task('build',["js:components","css:components"],function(){
    gulp.src(file.components.css).
        pipe(gulpif(task=="min",minifyCss({noAdvanced: true,rebase: false}))).
        pipe(gulp.dest('./components/'));
});