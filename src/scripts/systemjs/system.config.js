/**
 * Created by zdaily on 3/28/2016.
 */
System.config({
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        },
        scripts: {
            defaultExtension: 'js'
        }
    },
    map: {
        "sockjs-client": "scripts/sockjs/sockjs.min.js"
    }
});