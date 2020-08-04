import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubLinkComponent } from './github-link/github-link.component';
import {Githubservice} from './github-link/githubservice';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    GithubLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ChartsModule

  ],
  providers: [Githubservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
