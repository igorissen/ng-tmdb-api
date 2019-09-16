import {ModuleWithProviders, NgModule} from '@angular/core';
import {ITMDBApiModuleConfig} from './models/common/module-configuration.model';
import {TMDB_API_MODULE_CONFIG} from './injection-tokens';
import {TMDBClient} from './core/client';
import {TMDBRequestHandler} from './core/request-handler';
import {TMDBConfigurationEndpoint} from './endpoints';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule]
})
export class NgTMDBApiModule {
  public static forRoot(moduleConfig: ITMDBApiModuleConfig): ModuleWithProviders {
    const config: ITMDBApiModuleConfig = Object.assign({apiBaseUrl: 'https://api.themoviedb.org', apiVersion: 3}, moduleConfig);
    return {
      ngModule: NgTMDBApiModule,
      providers: [
        {useValue: config, provide: TMDB_API_MODULE_CONFIG},
        TMDBClient,
        TMDBRequestHandler,
        TMDBConfigurationEndpoint
      ]
    };
  }
}
