import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService{
  constructor (private http:Http){ }


  getCommentforActivity(param:any){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('//localhost:4000/activities/getComments',JSON.stringify(param), {headers: headers})
      .map(res => res.json());
  }


  addCommentforActivity(param:any){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('//localhost:4000/activities/addComment',JSON.stringify(param), {headers: headers})
      .map(res =>res.json());
  }
}
