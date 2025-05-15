import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
bootstrapApplication(HeaderComponent);

//if we are using module instead of standalone components, we cannot start our application using bootStrapApplication

// import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import { AppModule } from "./app/app.module";

// platformBrowserDynamic().bootstrapModule(AppModule)