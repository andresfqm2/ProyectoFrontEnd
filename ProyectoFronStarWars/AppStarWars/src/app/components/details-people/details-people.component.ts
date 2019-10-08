import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { PeopleInterface } from 'src/app/models/people-interface';

@Component({
  selector: 'app-details-people',
  templateUrl: './details-people.component.html',
  styleUrls: ['./details-people.component.css']
})
export class DetailsPeopleComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

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
    this.getListPeoples();

  }

  getListPeoples() {
    this.dataApi.getAllPeople().subscribe((people: PeopleInterface) => (this.people = people));
  }


}

