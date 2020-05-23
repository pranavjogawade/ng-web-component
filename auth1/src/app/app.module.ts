import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AuthComponent],
  entryComponents: [AuthComponent] // use entryComponents array instaed of bootstrap because it will be added dynamically.
})
export class AppModule{
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const strategyFactory = new ElementZoneStrategyFactory(AuthComponent, this.injector);
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(AuthComponent, {
      injector: this.injector,
      strategyFactory
    });
    // using built in the browser to create your own custome element name
    if(!customElements.get('pranav-card')) customElements.define('pranav-card', el);
  }
}
