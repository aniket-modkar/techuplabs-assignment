import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FETCH_PINS_API, MEDIA_URL } from 'src/app/share/utils/apis.constant';
import { HttpHelperService } from 'src/app/share/utils/http-helper.service';
import { Pins } from '../utils/pin.models';

@Injectable()
export class PinService {
  _httpHelper = inject(HttpHelperService);
  fetchPins(): Observable<Pins[]> {
    return this._httpHelper.get<Pins[]>(FETCH_PINS_API).pipe(
      map((_) => {
        _.map((__) => (__.image = MEDIA_URL + __.image));
        return _;
      })
    );
  }
}
