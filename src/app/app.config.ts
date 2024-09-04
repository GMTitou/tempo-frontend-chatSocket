import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
// import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";

// const socketConfig: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

export const appConfig: ApplicationConfig = {
  // imports: [
  //   SocketIoModule.forRoot(socketConfig)
  // ],
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    // importProvidersFrom(SocketIoModule.forRoot(socketConfig)),
  ],
};
