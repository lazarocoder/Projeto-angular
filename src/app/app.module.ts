import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from "@modules/home/home.module";
import { LoginComponent } from '@modules/login/login.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BasicAuthInterceptor } from './auth/basic-auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HomeModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
