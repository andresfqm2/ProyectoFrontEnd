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
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule} from '@angular/forms';
import { FilterCharacterPipe } from './pipes/filter-character.pipe';
import { FilterPlanetsPipe } from './pipes/filter-planets.pipe';
import { FilterStartshipsPipe } from './pipes/filter-startships.pipe';
import { FilterVehiclesPipe } from './pipes/filter-vehicles.pipe';
import { FilterSpeciesPipe } from './pipes/filter-species.pipe';

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
    ListFilmsComponent,
    FilterPipe,
    FilterCharacterPipe,
    FilterPlanetsPipe,
    FilterStartshipsPipe,
    FilterVehiclesPipe,
    FilterSpeciesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  // injectamos nuestro servicio como providers
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
