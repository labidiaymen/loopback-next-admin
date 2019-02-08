import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { AppModule } from 'src/app/app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClient, HttpClientModule, HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  @Injectable()
  class TestHttpRequestInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
      Observable<HttpEvent<any>> {
      return new Observable<any>(observer => {
        observer.next({} as HttpEvent<any>);
      });
    }
  }
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      // imports: [AppModule],
      imports: [FormsModule, ReactiveFormsModule, NgZorroAntdModule, HttpClientModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS, useClass: TestHttpRequestInterceptor, multi: true
        }
      ],
      declarations: [LoginComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
