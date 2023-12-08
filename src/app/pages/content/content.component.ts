import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  private id: string | null = "0";

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null): void{
    const result = data.filter(x => x.id === id)[0];

    if(result){
      this.photoCover = result.photo;
      this.contentDescription = result.description;
      this.contentTitle = result.title;
    }
  }

}
