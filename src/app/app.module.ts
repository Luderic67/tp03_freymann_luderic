import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TetiereComponent } from './components/tetiere/tetiere.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { InputErrorDirective } from './directives/input-error.directive';
import { ResumeComponent } from './components/resume/resume.component';
import { PhonePipePipe } from './pipes/phone-pipe.pipe';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    FormulaireComponent,
    InputErrorDirective,
    ResumeComponent,
    PhonePipePipe,
    CatalogComponent,
    CatalogItemComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
