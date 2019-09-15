import {InjectionToken} from '@angular/core';
import {ITMDBApiModuleConfig} from './models/common/module-configuration.model';

/**
 * Injection token to create a configurable module
 */
export const TMDB_API_MODULE_CONFIG = new InjectionToken<ITMDBApiModuleConfig>('TMDB API configuration module token');
