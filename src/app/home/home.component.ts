import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  people= '';
  ships= '';
  films= '';
  
  searchForms = [{ view: "People", value: "people" }, { view: "Star Ships", value: "starships" }, { view: "Films", value: "films" }]
  public result: any;

  constructor(private ds: DataService) { }
  
  ngOnInit() {

  } 
  onGet(select, input){
    this.ds.getStarWars(select, input).subscribe(data => {
      this.result = data
      console.log(this.people)
    })

  }
}


