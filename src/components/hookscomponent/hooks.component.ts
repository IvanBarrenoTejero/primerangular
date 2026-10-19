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

  ngDoCheck(): void {
    console.log('DoCheck: Me ejecuto al cambair el render');
  }

  cambiarMensaje(): void {
    this.mensaje = 'Y mañana martes!!!';
  }
}
