const browserSync = require( 'browser-sync' );

browserSync(
		{
			server: {
				baseDir: "./",
				index  : "search-result.html"
			},
			files: ['./dist/*.js', '*.html']
		}
);
