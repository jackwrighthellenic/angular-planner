import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from './pipes/date.pipe';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { AccountService } from './services/AccountService';
import { AuthGuard } from './services/AuthGuard';
import { Utils } from './services/Utils';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { TodoCardComponent } from './shared/todo-card/todo-card.component';
import { TodoItemComponent } from './routes/todo-item/todo-item.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    TodoCardComponent,
    HomeComponent,
    DatePipe,
    LoginComponent,
    TodoItemComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [Utils, AuthGuard, AccountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
