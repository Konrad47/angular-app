import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/post/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/post/post.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthEffects } from './store/authorization/auth.effects';
import { authReducers } from './store/authorization/auth.reducer';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
