import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const basic = sessionStorage.getItem("basic");
      /* ?sessionStorage.getItem("basic"):btoa('admin:admin'); */
      if(basic) { 
        let headers = request.headers
            .set('Content-Type', 'application/json')
            .set('Authorization', `Basic ${basic}`);
        request = request.clone({headers});
      }
      
      console.log(`Basic ${basic}`);
      /* console.log(`Basic ${btoa(usuario + ':' + senha)}`);

       alert(`Basic ${btoa(usuario + ':' + senha)}`) 

      request = request.clone({
          setHeaders: { 
              Authorization: `Basic ${btoa(usuario + ':' + senha)}`
          }
      }); */

      return next.handle(request);
    }
}