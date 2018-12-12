import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingService{
  constructor (private http:Http){ }


  bookForUser(param:any){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('//localhost:4000/activities/bookActivity',JSON.stringify(param), {headers: headers})
      .map(res =>res.json());
  }
}
