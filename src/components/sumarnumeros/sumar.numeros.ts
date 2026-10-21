import { Component, ElementRef, ViewChild, viewChild } from "@angular/core";

@Component({
    selector: "app-sumar-numeros",
    standalone: false,
    templateUrl: './sumar.numeros.html'
})
export class SumarNumerosComponent {
    public suma: number;
    @ViewChild('cajaNumero1') cajanumero1!: ElementRef;
    @ViewChild('cajaNumero2') cajanumero2!: ElementRef;

    constructor() {
        this.suma = 0;
    }

    sumarNumeros(): void {
        let numero1 = this.cajanumero1.nativeElement.value;
        let numero2 = this.cajanumero2.nativeElement.value;
        this.suma = parseInt(numero1) + parseInt(numero2);


    }
}