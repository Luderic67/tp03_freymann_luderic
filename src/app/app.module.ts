import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faFrown } from '@fortawesome/free-solid-svg-icons';
import { FormComponent } from './components/form/form.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ControlMessagesComponent,
    ResumeComponent,
    PhoneNumberPipe,
    ListComponent,
    ListItemComponent,
    SearchbarComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub, faSearch, faFrown);
  }
}
