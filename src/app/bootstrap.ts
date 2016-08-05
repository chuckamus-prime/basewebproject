import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app.component';
import { KeyspringAppComponent } from './components/keyspring.component';
import { PrimeComponent } from './components/primeng.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [
	disableDeprecatedForms(),
	provideForms(),
	HTTP_PROVIDERS
]);