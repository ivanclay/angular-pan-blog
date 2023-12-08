import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() photoCover: string = "https://tm.ibxk.com.br/2021/04/20/20172240315232.jpg";
  @Input() contentTitle: string = "NOTICIA SOBRE BONES";
  @Input() contentDescription: string = "noticias, noticias, noticias";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log(value.get("id"))
    );
  }

}
