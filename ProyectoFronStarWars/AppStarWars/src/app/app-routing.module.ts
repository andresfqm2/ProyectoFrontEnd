import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsPeopleComponent } from './components/details-people/details-people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { FilmsComponent } from './components/films/films.component';
import { SpeciesComponent } from './components/species/species.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { Page404Component } from './components/page404/page404.component';
import { ListFilmsComponent } from './components/list-films/list-films.component';

// Ruteamos nuestras rutas
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'people', component: DetailsPeopleComponent},
  {path: 'people/:id', component: DetailsPeopleComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'planets/:id', component: PlanetsComponent},
  {path: 'films/:episode_id', component: FilmsComponent},
  {path: 'listFilms', component: ListFilmsComponent},
  {path: 'species', component: SpeciesComponent},
  {path: 'species/:id', component: SpeciesComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'vehicles/:id', component: VehiclesComponent},
  {path: 'startships', component: StarshipsComponent},
  {path: 'startships/:id', component: StarshipsComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
