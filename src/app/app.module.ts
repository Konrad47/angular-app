import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { ButtonsComponent } from './core/components/buttons/buttons.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './core/stores/store-ngxs/todo/todo.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { reducers } from './core/stores/store-ngrx/post/post.reducer';
import { authReducers } from './core/stores/store-ngrx/authorization/auth.reducer';
import { AuthEffects } from './core/stores/store-ngrx/authorization/auth.effects';
import { PostsEffects } from './core/stores/store-ngrx/post/post.effects';
import { AuthState } from './core/stores/store-ngxs/auth/auth.state';

@NgModule({
  declarations: [AppComponent, MenuComponent, ButtonsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    StoreModule.forRoot({ posts: reducers, auth: authReducers }),
    EffectsModule.forRoot([PostsEffects, AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    NgxsModule.forRoot([TodoState, AuthState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
