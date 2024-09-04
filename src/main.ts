import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(SocketIoModule.forRoot(config))
  ],
})

// bootstrapApplication(AppComponent, {
//   imports: [SocketIoModule.forRoot(config)]
// });

// const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
//
// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(SocketIoModule.forRoot(config)),
//     // autres providers si nécessaires
//   ]
// });
