const browserSync = require( 'browser-sync' );

browserSync(
		{
			server: {
				baseDir: "./",
				index  : "article-detail.html"
			},
			files: ['./dist/*.js', '*.html']
		}
);
