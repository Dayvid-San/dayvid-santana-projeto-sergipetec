import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Contribuintes } from '../models/cadastrados';
import { ContribuintesService } from '../services/contribuintes.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  //Model dos cadastrados
  contribuintes: Contribuintes[]

  contribuintes$: Observable<Contribuintes[]>

  constructor(private service: ContribuintesService) { }

  ngOnInit(): void {
    this.service.list()
    .subscribe(dados => this.contribuintes = dados)
  }

}
