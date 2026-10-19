import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hooks-component',
  standalone: false,
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.css',
})
export class HooksComponent implements OnInit {
  public mensaje: string;
  constructor() {
    this.mensaje = 'Hoy es lunes...';
  }

  ngOnInit(): void {
    console.log('OnInit: Me ejecuto después del constructor');
  }
}
