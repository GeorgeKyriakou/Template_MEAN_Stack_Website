import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DetailsService{
  constructor (private http:Http){ }


  getByParam(param:any){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('//localhost:4000/activities/getByParam',JSON.stringify(param), {headers: headers})
      .map(res => res.json());
  }

  markFavorite(param:any){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('//localhost:4000/activities/markFav',JSON.stringify(param), {headers: headers})
      .map(res => res.json());
  }

  checkFavorite(param:any){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('//localhost:4000/activities/checkFav',JSON.stringify(param), {headers: headers})
      .map(res => res.json())
    }
}
