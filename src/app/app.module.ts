import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OtherComponent } from './other/other.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    TodoComponent,
    AboutComponent,
    ContactComponent,
    OtherComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NavigationComponent]
})
export class AppModule { }
