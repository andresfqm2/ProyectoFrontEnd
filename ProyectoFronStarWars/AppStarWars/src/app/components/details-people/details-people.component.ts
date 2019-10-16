import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { PeopleInterface } from 'src/app/models/people-interface';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-details-people',
  templateUrl: './details-people.component.html',
  styleUrls: ['./details-people.component.css']
})
export class DetailsPeopleComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }

  filterPeoples = '';
  private people: PeopleInterface = {
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: ''
  };
  ngOnInit() {
  //this.getPeopleForFilms("https://swapi.co/api/people/3/");
  this.getListPeoples();


  }

  getListPeoples() {
    this.dataApi.getAllPeople().subscribe((people: PeopleInterface) => (this.people = people));
  }

  getPeopleForFilms(url: string){   
    this.dataApi.getCharactersForFilms(url).subscribe(people => console.log(people));
  }


}

