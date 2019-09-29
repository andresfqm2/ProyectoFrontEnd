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
    this.getDetailsFilms(films_id);
  }

  getDetailsFilms(episode_id: string){
    this.dataApi.getFilmById(episode_id).subscribe(films => (this.films = films));
  }

}
