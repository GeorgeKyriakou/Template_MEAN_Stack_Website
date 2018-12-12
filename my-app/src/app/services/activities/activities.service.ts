import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivityService{
  constructor (private http:Http){ }

  getAll(){
    return this.http.get('//localhost:4000/activities/getAll')
      .map(res => res.json());
  }


}
