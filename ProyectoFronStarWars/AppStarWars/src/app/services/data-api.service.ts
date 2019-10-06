import { Injectable } from '@angular/core';
// importamos los http
import { HttpClient, HttpHeaders } from '@angular/common/http';
// importamos un Observable
import { Observable } from 'rxjs/internal/Observable';

// Importamos nuestras interface
import {PeopleInterface} from '../models/people-interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  peoples: Observable<any>;
  people: Observable<any>;

  films: Observable<any>;
  film: Observable<any>;

  constructor(private http: HttpClient) { }
  
  getAllPeople(){
    const url_api = "https://swapi.co/api/people";
  return this.http.get(url_api);
  }
 
  getPeopleById(id: string){
    const url_api = `https://swapi.co/api/people/${id}`;
    return (this.people = this.http.get(url_api));
  }

  getAllFilms(){
    const url_api = "https://swapi.co/api/films";
    return this.http.get(url_api);
  }
  getFilmById(episode_id: string){
    const url_api = `https://swapi.co/api/films/${episode_id}`;
    return (this.film = this.http.get(url_api));
    

  }
  getAllPlanets(){
    const url_api = "https://swapi.co/api/planets";
  return this.http.get(url_api);
  }
 
  getPlanetsById(id: string){
    const url_api = `https://swapi.co/api/planets/${id}`;
    return (this.people = this.http.get(url_api));
  }

  getAllSpecies(){
    const url_api = "https://swapi.co/api/species";
  return this.http.get(url_api);
  }
 
  getSpeciesById(id: string){
    const url_api = `https://swapi.co/api/species/${id}`;
    return (this.people = this.http.get(url_api));
  }

  getAllVehicles(){
    const url_api = "https://swapi.co/api/vehicles";
  return this.http.get(url_api);
  }
 
  getVehiclesById(id: string){
    const url_api = `https://swapi.co/api/vehicles/${id}`;
    return (this.people = this.http.get(url_api));
  }

  getAllStarships(){
    const url_api = "https://swapi.co/api/starships";
  return this.http.get(url_api);
  }
 
  getStarshipsById(id: string){
    const url_api = `https://swapi.co/api/starships/${id}`;
    return (this.people = this.http.get(url_api));
  }

}

