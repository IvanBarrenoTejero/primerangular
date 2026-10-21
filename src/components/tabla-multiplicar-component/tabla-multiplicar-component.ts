import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent {
  @ViewChild("cajaNumero") cajaNumero!: ElementRef;
  public tabla: Array<Number>;

  constructor() {
    this.tabla = [];
  }

  calcularTablaMultiplicar(): void {
    let numero = parseInt(this.cajaNumero.nativeElement.value);
    this.tabla.length = 0;

    for (let i = 1; i <= 10; i++) {
      this.tabla.push(numero * i);
    }
    console.log(this.tabla);
  }
}
