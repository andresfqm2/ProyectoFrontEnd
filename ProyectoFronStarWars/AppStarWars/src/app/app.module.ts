import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importamos nuestro servicio
import { DataApiService } from 'src/app/services/data-api.service';
// Importamos el HttpClientModule
import { HttpClientModule} from '@angular/common/http'; 
import { HomeComponent } from './components/home/home.component';
import { DetailsPeopleComponent } from './components/details-people/details-people.component';
import { Page404Component } from './components/page404/page404.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { FilmsComponent } from './components/films/films.component';
import { SpeciesComponent } from './components/species/species.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ListFilmsComponent } from './components/list-films/list-films.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsPeopleComponent,
    Page404Component,
    PlanetsComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent,
    NavbarComponent,
    HeroComponent,
    ListFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // injectamos nuestro servicio como providers
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
