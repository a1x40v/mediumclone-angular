import { NgModule, isDevMode } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { PersistenceService } from './shared/services/persistence.service';
import { authInterceptor } from './shared/interceptors/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { YourFeedModule } from './your-feed/your-feed.module';
import { AuthModule } from './auth/auth.module';
import { TagFeedModule } from './tag-feed/tag-feed.module';
import { ArticleModule } from './article/article.module';
import { CreateArticleModule } from './create-article/create-article.module';
import { EditArticleModule } from './edit-article/edit-article.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { SettingsModule } from './settings/settings.module';

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
    CreateArticleModule,
    EditArticleModule,
    ArticleModule,
    SettingsModule,
    TopBarComponent,
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    PersistenceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
