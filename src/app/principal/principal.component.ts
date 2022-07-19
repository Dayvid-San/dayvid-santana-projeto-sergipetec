import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contribuintes } from '../models/cadastrados';
import { ContribuintesService } from '../services/contribuintes.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  @Input() cadastrados: any[] = [];
  //contribuintes: Contribuintes[]

  contribuintes$: Observable<Contribuintes[]>
  deletado = false

  constructor (private service: ContribuintesService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    //this.service.list()
    //.subscribe(dados => this.contribuintes = dados)

    this.contribuintes$ = this.service.list()
  }

  onEdit(id: any) {
    this.router.navigate(['editarContribuintes', id], { relativeTo: this.route})
  }
  onDetails(nome: any) {
    nome = nome.split(' ')
    this.router.navigate(['detalhes', nome], { relativeTo: this.route})
  }
  toDelete(contribuinte: any) {
    console.log(`Delete funcionando para ${contribuinte.id}`)
    this.service.delete(contribuinte)
   .subscribe(contribuinte =>{
     this.service.list();
   })
   this.deletado = true
  }


  refresh(){
    this.deletado=false
  }
}
