import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksComponent } from '../components/hookscomponent/hooks.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsBindingComponent } from '../components/froms/forms.binding.component';
import { FormsModule } from '@angular/forms';
import { SumarNumerosComponent } from '../components/sumarnumeros/sumar.numeros';
import { TestComponent } from '../components/test-component/test-component';
import { TablaMultiplicarComponent } from '../components/tabla-multiplicar-component/tabla-multiplicar-component';

@NgModule({
  declarations: [App, PrimerComponent, HooksComponent, DeportesComponent, FormsBindingComponent, SumarNumerosComponent, TestComponent, TablaMultiplicarComponent],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule { }
