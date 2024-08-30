import { NgModule, isDevMode } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { YourFeedModule } from './your-feed/your-feed.module';
import { AuthModule } from './auth/auth.module';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { PersistenceService } from './shared/services/persistence.service';
import { authInterceptor } from './shared/interceptors/auth.interceptor';
import { TagFeedModule } from './tag-feed/tag-feed.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    AuthModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    TopBarComponent,
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    PersistenceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
