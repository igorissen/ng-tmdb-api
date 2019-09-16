# ng-tmdb-api

Angular library which provides a service to make all available requests to [TheMovieDatabase API](https://developers.themoviedb.org/3/getting-started/introduction).

**NOTE**: Only version 3 of the API is implemented.

## Roadmap

- [ ] Add version 4 of TMDB API
- [ ] Add unit tests

## Getting started

### Installation

```
$ npm install --save @igorissen/ng-tmdb-api
```

### Usage

Import `NgxTMDBApiModule` and configure it with your TheMovieDatabase API key.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxTMDBApiModule } from '@igorissen/tmdb-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTMDBApiModule.forRoot({ apiKey: 'YOUR_API_KEY_HERE' })
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

Then inject `TMDBClient` and use it.

```typescript
import { Component, OnInit } from '@angular/core';
import { TMDBClient } from '@igorissen/tmdb-api';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private tmdb: TMDBClient) {}

  public ngOnInit(): void {
    // fetch TMDB configuration info
    this.tmdb.configuration
        .getApiConfiguration()
        .pipe(first())
        .subscribe(console.log);
    
    // fetch movie details with some filters
    this.tmdb.movies
        .getDetails('384018', {language: 'FR', append_to_response: 'videos,images'})
        .pipe(first())
        .subscribe(console.log);
    
    // fetch alternative titles for a movie
    this.tmdb.movies
        .getAlternativeTitles('384018')
        .pipe(first())
        .subscribe(console.log);
  }
}
```

## Contributing
