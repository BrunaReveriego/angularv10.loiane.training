import { Component } from '@angular/core';

// notações de metadados
//selector -> componentes html customizados
//templateHtml
@Component({
    selector: 'meu-primeiro-component',
    template: `
        <p>Meu primeiro component com Angular 10 </p>
    `
})
export class MeuPrimeiroComponent { }