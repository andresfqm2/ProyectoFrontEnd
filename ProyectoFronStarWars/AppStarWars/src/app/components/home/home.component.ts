import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import {FilmInterface } from '../../models/film-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private films: FilmInterface;
  filterFilms = '';

  ngOnInit() {    
    this.getListFilms();
  }
 /* getListPeoples() {
    this.dataApi.getAllPeople().subscribe(peoples => console.log(peoples));
  }*/
  
  getListFilms(){
    this.dataApi.getAllFilms().subscribe((films: FilmInterface) =>(this.films = films));
  }

}
