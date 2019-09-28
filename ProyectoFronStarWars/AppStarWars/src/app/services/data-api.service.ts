import { Injectable } from '@angular/core';
// importamos los http
import { HttpClient, HttpHeaders } from '@angular/common/http';
// importamos un Observable
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  peoples: Observable<any>;
  people: Observable<any>;

  constructor(private http: HttpClient) { }
  
  getAllPeople(){
    const url_api = "https://swapi.co/api/people";
  return this.http.get(url_api);
  }

  // "https://swapi.co/api/people/1/", 
  getPeopleById(id: Int16Array){
    const url_api = "https://swapi.co/api/people/${id}";
    return (this.people = this.http.get(url_api));
  }
}

