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
		app: "../../src/app",
		scripts: "../scripts",
		test:"./",
		node_modules:'../../node_modules'
	}
});