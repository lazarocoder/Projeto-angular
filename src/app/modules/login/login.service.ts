import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '@utils/constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(): Observable<HttpResponse<boolean>> {
    const headersRequest = new HttpHeaders({'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa("admin:admin")}`});
    return this.http.get<boolean>(SERVER_API_URL + 'login',
      { headers:headersRequest,observe: "response" })
      .pipe(map((res: HttpResponse<boolean>) => res));
  }
  
}
