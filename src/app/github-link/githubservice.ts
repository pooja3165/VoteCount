import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class Githubservice{
    constructor(public httpClient: HttpClient){}
   githubpoints():Observable<any>{
       return this.httpClient.get('https://hn.algolia.com/api/v1/search?page=1');
   }
}