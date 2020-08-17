import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let result;
    console.log(request.url, request.method);
    if (
      request.url.startsWith('/events/add') &&
      request.method === 'POST'
    ) {
      const body = request.body;

      result = of(new HttpResponse({
        status: 200,
        body
      }));
    } else if (request.url.startsWith('/events') &&
      request.method === 'GET') {
      result = of(new HttpResponse({
        status: 200, body: [
          {name: 'Fake Event', address: 'Kyiv, Ukriane', date: new Date()}
        ]
      }));
    } else {
      result = next.handle(request);
    }


    return result;
  }
}
