import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Utils } from './services/Utils';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { TodoCardComponent } from './shared/todo-card/todo-card.component';
import { HomeComponent } from './routes/home/home.component';
import { DatePipe } from './pipes/date.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './routes/login/login.component';

@NgModule({
  declarations: [AppComponent, NavMenuComponent, TodoCardComponent, HomeComponent, DatePipe, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [Utils],
  bootstrap: [AppComponent],
})
export class AppModule {}
