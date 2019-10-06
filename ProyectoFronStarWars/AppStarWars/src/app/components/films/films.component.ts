import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { FilmInterface } from 'src/app/models/film-interface';
// Importamos ActivatedRoute, Params para obtener los parametros que vienen por url
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }

  private films: FilmInterface = {
    title : '',
    episode_id: '',
    opening_crawl: '',
    director: '',
    producer: '',
    release_date: ''
  }


  ngOnInit() {
    const films_id = this.route.snapshot.params["episode_id"];
    let id_films;

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
  }

}
