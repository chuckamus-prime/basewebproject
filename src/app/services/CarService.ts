import {Injectable} from '@angular/core';
import {CARS} from './cardata';

@Injectable()
export class CarService {
	getCarsSmall(){
		return Promise.resolve(CARS);
	}
}