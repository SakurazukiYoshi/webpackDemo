

'use strict';

var gulp=require("gulp");  //载入gulp包，提供一些API
var less=require("gulp-less");  //载入gulp-less包，提供一些API
var cssnano=require("gulp-cssnano");  //载入gulp-cssnano包，提供一些API
var concat=require("gulp-concat");  //载入gulp-concat包，提供一些API
var uglify=require("gulp-uglify");  //载入gulp-concat包，提供一些API
var htmlmin=require("gulp-htmlmin");
var browserSync = require('browser-sync');
var reload =browserSync.reload;  //browserSync 的自动刷新文件  要设置参数stream:true


//-LESS编译 压缩 合并
gulp.task("css",function(){
    //这里是在执行style任务时自动执行的
    gulp.src(["src/css/*.css","src/css/*.less","!src/styles/_*.less"])//找到文件下的less文件,[]多种形式，！排除这个类型的
        .pipe(less())   //将less文件转化为css文件
        .pipe(cssnano())   //将css文件压缩
        .pipe(gulp.dest("dist/css")) //将转化成的css文件放在dist/styles中
        .pipe(reload({
            stream:true
        }));//自动重新刷新页面
});

//-js合并 压缩  混淆
gulp.task("js",function(){
    gulp.src("devDependencies/js/*.js")   //找到文件下的所有js文件
        //.pipe(concat("all.js"))//合并所有的js文件,合成的取名叫all.js
        //.pipe(uglify())  //混淆所有的js文件
        .pipe(gulp.dest("dist/js"))  //将转化成js文件放在dist/scripts中
        .pipe(reload({
            stream:true
        }));//自动重新刷新页面
    gulp.src("devDependencies/js/*.map")    //用于调试js代码时，找到对应的js文件
        .pipe(gulp.dest("dist/js"))//复制到dist/js中
        .pipe(reload({
            stream:true
        }));//自动重新刷新页面
});


//图片的复制
gulp.task("image",function(){
    gulp.src("src/images/*.*")    //找到文件下的所有文件
        .pipe(gulp.dest("dist/images"))//复制到dist/images中
        .pipe(reload({
            stream:true
        }));//自动重新刷新页面
});

//html的压缩

gulp.task("html",function(){
    var options = {
        removeComments: true,//清除HTML注释
        //collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src("src/*.html")    //用于调试js代码时，找到对应的js文件
        .pipe(gulp.dest("devDependencies"))
        .pipe(htmlmin(options))
        .pipe(gulp.dest("dist"))//复制到dist中
        .pipe(reload({
            stream:true
        }));//自动重新刷新页面
/*    gulp.src("devDependencies/!*.html")    //找到文件下的所有文件
        .pipe(htmlmin(options))
        .pipe(gulp.dest("dist"))//复制到dist中
        .pipe(reload({
            stream:true
        }));//自动重新刷新页面*/
});
// 静态服务器
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "dist"  //静态服务器的首页地址  相对路径
        }
    });
    gulp.watch("src/*.html",["html"]);   //监控该目录下的内容  发送变化执行html服务
    gulp.watch("src/images/*.*",["image"]);
    gulp.watch("devDependencies/js/*.map",["js"]);
    gulp.watch("devDependencies/js/*.js",["js"]);
    gulp.watch(["src/css/*.less","src/css/*.css","!src/css/_*.less"],["css"]);
});

gulp.task('s', function(){   //用gulp s来直接运行serve任务
    gulp.run('html','js','css',"image",'serve');
});
/*gulp.task('copy', function(){   //用gulp init直接建立dist文件
    gulp.run('html','js','css',"image");
});*/


