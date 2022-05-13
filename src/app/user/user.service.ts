import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {PageUser} from "./user-model/pageUser";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  pageUsers: PageUser | undefined;
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getUserDetails(page: number, rowSize: number): Observable<PageUser> {

    let url = this.baseUrl + '/record' + '?page=' + page + '&size=' + rowSize;
    return this.http.get<PageUser>(url)
      .pipe(
        map(response => {
          return response;
        }));
  }

}
