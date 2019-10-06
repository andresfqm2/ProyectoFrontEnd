import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private starShips: Starships ={
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '', 
    gender: ''
    
  }

  ngOnInit() {
    this.getListPeoples();

  }

  getListPeoples(){
    this.dataApi.getAllPeople().subscribe((people: PeopleInterface) =>(this.people = people));
  }


}
