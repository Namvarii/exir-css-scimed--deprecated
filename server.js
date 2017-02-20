const browserSync = require( 'browser-sync' );

browserSync(
		{
			server: {
				baseDir: "./",
				index  : "article-result.html"
			},
			files: ['./dist/*.js', '*.html']
		}
);
