import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {
  
  clienteData: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // const data = sessionStorage.getItem('clienteData');
    // if (data) {
    //   this.clienteData = JSON.parse(data);
    // } else {
    //   this.volver();
    // }
  }

  volver() {
    this.router.navigate(['/']);
  }

}
