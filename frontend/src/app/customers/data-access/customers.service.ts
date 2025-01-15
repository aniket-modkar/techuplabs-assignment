import { inject, Injectable } from '@angular/core';
import {
  ADD_CUSTOMER_API,
  FETCH_REGIONS_API,
} from 'src/app/share/utils/apis.constant';
import { HttpHelperService } from 'src/app/share/utils/http-helper.service';
import { RegionFetch } from '../utils/region.model';
import { map, Observable } from 'rxjs';

@Injectable()
export class CustomerService {
  _httpHelper = inject(HttpHelperService);
  fetchRegions(): Observable<string[]> {
    return this._httpHelper.get<RegionFetch>(FETCH_REGIONS_API).pipe(
      map((_: RegionFetch) => {
        let allRegions = [];
        let regions: string[];
        for (const key in _.data) {
          if (Object.prototype.hasOwnProperty.call(_.data, key)) {
            allRegions.push(_.data[key].region);
          }
        }
        regions = [...new Set(allRegions)];
        return regions;
      })
    );
  }

  fetchCountryByRegion(region: string): Observable<string[]> {
    return this._httpHelper.get<RegionFetch>(FETCH_REGIONS_API).pipe(
      map((_: RegionFetch) => {
        let countries: string[] = [];
        for (const key in _.data) {
          if (Object.prototype.hasOwnProperty.call(_.data, key)) {
            if (_.data[key].region === region) {
              countries.push(_.data[key].country);
            }
          }
        }
        return countries;
      })
    );
  }

  addCustomer(body: any): Observable<any> {
    return this._httpHelper.post(ADD_CUSTOMER_API, body);
  }
}
