import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-details-people',
  templateUrl: './details-people.component.html',
  styleUrls: ['./details-people.component.css']
})
export class DetailsPeopleComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.getPeopleById();
  }

  getPeopleById(){
    this.dataApi.getAllPeople().subscribe(peoples => console.log(peoples));
  }

}

