///<reference path="../node_modules/systemjs/dist/system.src.js"/>
(function(global) {
	// map tells the System loader where to look for things
	var map = {
		'app':                        'app', // 'dist',
		'@angular':                   '../node_modules/@angular',
		'rxjs':                       '../node_modules/rxjs',
		'@angular2-material':		  '../node_modules/@angular2-material',
		'@covalent':				  '../node_modules/@covalent'
	};
	// packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		'app':                        { main: 'bootstrap.js',  defaultExtension: 'js' },
		'rxjs':                       { defaultExtension: 'js' }
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

	var covalentPackageNames = [
		'loading'
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

	covalentPackageNames.forEach(function (pkg) {
		packages[("@covalent.core/" + pkg)] = { main: pkg + ".js" };
	});

	var config = {
		map: map,
		packages: packages
	};
	System.config(config);
})(this);