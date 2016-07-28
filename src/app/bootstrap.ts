import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app.component';
import { KeyspringAppComponent } from './Components/keyspring.component';
import { CovalentAppComponent } from './Components/covalent.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(CovalentAppComponent, [
	disableDeprecatedForms(),
	provideForms(),
	HTTP_PROVIDERS
]);