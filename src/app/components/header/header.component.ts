import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  menuAtivo: string = 'usuarios';

  ngOnInit() {
    this.menuAtivo = localStorage.getItem('menu');
  }
  
  ativo(a: string) {
    localStorage.setItem('menu', a);
    this.menuAtivo = a;
  }
  

}
