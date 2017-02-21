const browserSync = require( 'browser-sync' );

browserSync(
		{
			server: {
				baseDir: "./",
				index  : "author-detail.html"
			},
			files: ['./dist/*.js', '*.html']
		}
);
