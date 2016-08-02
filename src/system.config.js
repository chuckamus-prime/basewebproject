///<reference path="../node_modules/systemjs/dist/system.src.js"/>
(function(global) {
	// map tells the System loader where to look for things
	var map = {
		'app':                        'app', // 'dist',
		'@angular':                   '../src/scripts/@angular',
		'rxjs':                       '../src/scripts/rxjs',
		'reflect-metadata':           '../src/scripts/reflect-metadata',
		'@angular2-material':		  '../src/scripts/@angular2-material'
	};
	// packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		'app':                        { main: 'bootstrap',  defaultExtension: 'js' },
		'rxjs':                       { main: 'Rx', defaultExtension: 'js' },
		'reflect-metadata':           { defaultExtension: 'js' }
	};
	var ngPackageNames = [
		'common',
		'compiler',
		'core',
		'forms',
		'http',
		'platform-browser',
		'platform-browser-dynamic'
	];

	var ngMaterialPackageNames = [
		'core',
		'button',
		'card',
		'tabs',
		'list',
		'progress-circle',
		'progress-bar',
		'sidenav',
		'toolbar',
		'checkbox',
		'input',
		'radio',
		'icon',
		'grid-list'
	];

	// Individual files (~300 requests):
	function packIndex(pkgName) {
		packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
	}
	// Bundled (~40 requests):
	function packUmd(pkgName) {
		packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
	}
	// Most environments should use UMD; some (Karma) need the individual index files
	var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
	// Add package entries for angular packages
	ngPackageNames.forEach(setPackageConfig);

	ngMaterialPackageNames.forEach(function (pkg) {
		packages[("@angular2-material/" + pkg)] = { main: pkg + ".js" };
	});

	var config = {
		map: map,
		packages: packages
	};
	System.config(config);
})(this);