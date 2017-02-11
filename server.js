const browserSync = require( 'browser-sync' );

browserSync(
		{
			server: {
				baseDir: "./",
				index  : "index.html"
			},
			files: ['./dist/*.js', 'index.html']
		}
);
