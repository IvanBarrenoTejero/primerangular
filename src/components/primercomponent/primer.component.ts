import { Component } from '@angular/core';

@Component({
  selector: 'primer-component',
  standalone: false,
  styleUrl: './primer.component.css',
  templateUrl: './primer.component.html',
})
export class PrimerComponent {
  public nombre: string;
  public year: number;

  constructor() {
    this.nombre = 'Alumno';
    this.year = 2026;
  }
}
