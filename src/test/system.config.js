System.config({
	defaultJSExtensions: true,
	packages: {
		app: {
			format: 'register'
		},
		scripts: {
			format: 'global'
		},
		config: {
			format: 'register'
		}
	},
	transpiler:null,
	map: {
		app: "../app",
		scripts: "../scripts",
		node_modules:'../../node_modules'
	}
});