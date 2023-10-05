import { Injectable } from  '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, tap} from "rxjs";

@Injectable()
export class ReqTimeInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqTime:number = new Date().getTime();
    console.log('req Url: ',req.urlWithParams);
    return next.handle(req).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          const reqDelay:number = new Date().getTime() - reqTime;
          console.log('request delay: ', reqDelay, ' ms');
        }
      })
    );
  }
}
