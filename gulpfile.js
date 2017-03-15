var gulp=require("gulp"),
    uglify=require("gulp-uglify"),
    concat=require("gulp-concat"),
    rev=require("gulp-rev"),
    sass=require('gulp-sass'),
    revCollector=require('gulp-rev-collector'),
    webserver=require('gulp-webserver'),
    watch=require("gulp-watch");

gulp.task('sass',function(){
    gulp.src('./css/*.sass')
        .pipe(gulp.dest('./dist/css'))
})

gulp.task("uglify",function(){
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})
gulp.task("concat",function(){
    gulp.src('./js/*.js')
        .pipe(concat('concat.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})
gulp.task('rev',function(){
    gulp.src('./css/*.css')
        .pipe(rev())
        .pipe(gulp.dest('./dist/css'))
})
gulp.task("webserver",['start'],function(){
    gulp.src("./")
        .pipe(webserver({
            port:3333,
            root:"./html",
            livereload:true,
            directorylisting:true,//node出服务文件列表
            open:'index.html'

        }))
})
gulp.task("start",function(){
    gulp.watch('./dist/*.sass',['css']);
    gulp.watch("./dist/*.js",['concat']);
    gulp.watch("./*.html")
})

/*gulp.task('revHtml', function () {
    return gulp.src(['./data/!*.json', './!*.html'])
        .pipe(revCollector({replaceReved:true}))
        .pipe(gulp.dest('./dist'));
});


gulp.task('revManageHtml', function () {
    return gulp.src(['./css/!*.sass', './!*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('./dist'));
});*/

gulp.task('default',['uglify','sass',"webserver",'concat'])
































