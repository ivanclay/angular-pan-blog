import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() photoCover: string = "https://tm.ibxk.com.br/2021/04/20/20172240315232.jpg";
  @Input() contentTitle: string = "NOTICIA SOBRE BONES";
  @Input() contentDescription: string = "noticias, noticias, noticias";

  constructor() { }

  ngOnInit(): void {
  }

}
