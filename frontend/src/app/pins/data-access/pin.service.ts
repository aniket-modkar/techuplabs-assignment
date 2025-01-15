import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PINS_API, MEDIA_URL } from 'src/app/share/utils/apis.constant';
import { HttpHelperService } from 'src/app/share/utils/http-helper.service';
import { Pins } from '../utils/pin.models';

@Injectable()
export class PinService {
  private _httpHelper = inject(HttpHelperService);
  fetchPins(): Observable<Pins[]> {
    return this._httpHelper.get<Pins[]>(PINS_API).pipe(
      map((_) => {
        _.map((__) => (__.image = MEDIA_URL + __.image));
        return _;
      })
    );
  }

  addPin(body: any): Observable<any> {
    return this._httpHelper.post(PINS_API, body);
  }
}
