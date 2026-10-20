import { Component } from "@angular/core";

@Component({
    selector: "app-froms-binding",
    standalone: false,
    templateUrl: "./froms.binding.component.html",
})

export class FormsBindingComponent {
    public user: any;
    public mensaje: string;

    constructor() {
        this.mensaje = "";
        this.user = {
            nombre: "",
            apellido: "",
            edad: 0,
        }
    }

    recibirDatos(datos: any) {
        this.user = "Datos recibidos!!!"
    }
}