import { Component } from '@angular/core';
@Component({
    selector: 'app-deportes',
    standalone: false,
    templateUrl: './deportes.component.html',
})
export class DeportesComponent {

    public sports: Array<string>;
    public numeros: Array<number>;
    constructor() {
        this.sports = [
            'Canicas',
            'Petanca',
            'Curling',
            'Futbol'
        ];
        this.numeros = [1, 2, 3, 4, 5];
    }
}
