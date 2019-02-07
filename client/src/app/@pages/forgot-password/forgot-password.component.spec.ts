import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPasswordComponent } from '@pages/forgot-password/forgot-password.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
class TestHttpRequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return new Observable<any>(observer => {
      observer.next({} as HttpEvent<any>);
    });
  }
}
describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, NgZorroAntdModule, HttpClientModule],
      declarations: [ForgotPasswordComponent],
      providers: [
        {
          provide: HTTP_INTERCEPTORS, useClass: TestHttpRequestInterceptor, multi: true
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeDefined();
  });
});
