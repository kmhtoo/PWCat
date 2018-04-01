import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule
  ,MatCardModule 
  ,MatButtonModule
} from "@angular/material";
import { ServiceWorkerModule } from "@angular/service-worker";

import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js'):[]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
