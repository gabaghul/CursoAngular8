import { Component } from "@angular/core";

@Component({
    // Método 1 Invocação via Tag
    // selector: 'myfirst',
    // Metodo 2 Invocação via Diretiva
    // selector: '[myfirst]',
    selector: '.myfirst',

    // Método 1 (não usual)
    // template: `
    //     <h1>My First Component 1</h1>
    // `
    // Método 2 (não usual)
    // styles : [`
    //     .box1 {
        //         width: 200px;
        //         height: 100px;
        //         background: red;
        //         box-shadow: 5px 10px #CCCCCC;
        //     }
        // `]
    styleUrls: [
        './myfirst.component.css'
    ],
    templateUrl: './myfirst.component.html',
})
export class MyFirstComponent {

}