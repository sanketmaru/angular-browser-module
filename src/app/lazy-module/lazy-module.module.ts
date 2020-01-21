import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LazyComponent } from './lazy/lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
    declarations: [LazyComponent],
    imports: [
      LazyRoutingModule,
      // Dont import BrowserAnimationsModule inside child module
      // BrowserAnimationsModule
    ],    
})
export class LazyModule {}
