import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { FilmInterface } from 'src/app/models/film-interface';
// Importamos ActivatedRoute, Params para obtener los parametros que vienen por url
import {ActivatedRoute, Params} from '@angular/router';
import { PeopleInterface } from 'src/app/models/people-interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  private peopleFilms: PeopleInterface ={
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: ''
  };
  private films: FilmInterface = {
    title : '',
    episode_id: '',
    opening_crawl: '',
    director: '',
    producer: '',
    release_date: '' 
  };


  ngOnInit() {
    const films_id = this.route.snapshot.params["episode_id"];

    //const url = this.route.snapshot.params["url"];
    let id_films;
    this.getListPeoples();

    if(films_id =="4"){
     id_films = "1";
    }else if(films_id =="2"){
      id_films = "5";
    }else if(films_id =="1"){
      id_films = "4";
    }else if(films_id =="3"){
      id_films = "6";
    }else if(films_id =="6"){
      id_films = "3";
    }else if(films_id =="5"){
      id_films = "2";
    }else if(films_id =="7"){
      id_films = "7";
    }

    this.getDetailsFilms(id_films);   

          
  }

  getDetailsFilms(episode_id: string){
    this.dataApi.getFilmById(episode_id).subscribe(films => (this.films = films));
    let characters: any[] = [this.dataApi.getFilmById(episode_id).subscribe(films =>console.log(films))];
   
    console.log(characters);

    //this.getListPeoplesForFilms("https://swapi.co/api/people/3");
     // this.dataApi.getCharactersForFilms(url).subscribe(people => console.log(people));
  }

  getListPeoples() {
    //this.dataApi.getAllPeople().subscribe((peoples: PeopleInterface)=>(this.people = peoples)) ;
  }

  getListPeoplesForFilms(name: string){
    this.dataApi.getCharactersForFilms(name).subscribe(peopleFilms => (this.peopleFilms = peopleFilms));

  }

}
