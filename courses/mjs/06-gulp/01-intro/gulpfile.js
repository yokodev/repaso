var gulp = require('gulp'),
		babel = require('gulp-babel'),
		less = require('gulp-less');

gulp.task("dev:styles",devStyles);


gulp.task('default',()=>{
	return gulp
			.src("./src/scripts/**/*.js")
			.pipe(babel())
			.pipe(
					gulp
			.dest("./public/scripts/"));
});


function devStyles() {
	return gulp
		.src("./src/styles/site.less")
		.pipe(less())
		.pipe(gulp.dest("./public/styles"));
}
