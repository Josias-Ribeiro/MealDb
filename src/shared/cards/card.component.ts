import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'mdb-card',
    templateUrl: './view/card.component.html',
    styleUrls: ['./view/card.component.scss']
    
})

export class CardComponent implements OnInit {
    @Input() tituloCabecalho: string;
    @Input() conteudoCard: any;

    constructor() { }

    ngOnInit() { }
}