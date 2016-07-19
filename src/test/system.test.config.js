System.config({
	defaultJSExtensions: true,
	packages: {
		app: {
			format: 'register'
		},
		scripts: {
			format: 'global'
		}
	},
	transpiler:null,
	map: {
		app: "../app",
		scripts: "../scripts"
	}
});