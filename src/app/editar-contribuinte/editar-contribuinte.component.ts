import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Contribuintes } from '../models/cadastrados';
import { ContribuintesService } from '../services/contribuintes.service';

@Component({
  selector: 'app-editar-contribuinte',
  templateUrl: './editar-contribuinte.component.html',
  styleUrls: ['./editar-contribuinte.component.scss']
})

export class EditarContribuinteComponent implements OnInit {

  @ViewChild('formAddContribuinte') formAddContribuinte! : NgForm

  isNewEmail = false
  editCadastro! : Contribuintes

  addEmail () {
    this.isNewEmail = !this.isNewEmail
  }

  form: FormGroup
  submitted = false
  errorMessage = false

  constructor(private route: ActivatedRoute,
    private fb:FormBuilder,
    private service: ContribuintesService
    ) {
    this.route.params.subscribe(res => console.log(res['id']));
  }



  ngOnInit(): void {

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id']
        const contribuinte$ = this.service.loadByID(id)
        contribuinte$.subscribe(contribuinte => {
          this.updateForm(contribuinte)
        })
      }
    )

    this.form = this.fb.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]]
    })
  }

  updateForm(contribuinte: any) {
    this.form.patchValue({
      id: contribuinte.id,
      nome: contribuinte.nome
    })
  }

  hasError(field: string) {
    return this.form.get(field)?.errors
  }
  onSubmit(){
    this.submitted = true
    console.log(this.form.value)
    if (this.form.valid) {
      console.log('Submit')
      this.service.create(this.form.value).subscribe(
        success => console.log('sucesso'),
        error => console.log(error),
        () => console.log('request')
      )
    }
  }
  onCancel() {
    const inputContribuinte: Contribuintes = {
      nome: '',
      cpf: '',
      email: '',
      celular: '',
      telefone: '',
      enderecos: this.enderecos
    }
    alert("Cancel funcionando")
  }
  //cadastrar(){
    //this.HttpClient.post<Contribuintes>()
  //}

  @Output() aoCadastrar = new EventEmitter<any>();


  public nome: string;
  public cpf: number;
  public email: [] | string | any;
  public celular: number;
  public telefone: number;
  public enderecos: [] | any;
  public rua: string;
  public numero: string | number;
  public bairro: string;
  public cidade: string;
  public cep: string | number;
  public estado: string;
  public pais: string;


  multEmail(email: any[]) {
    let newEmail = []
     for (let mail of email){
      newEmail [newEmail.length] = email.push(mail)
    }
    console.log('Novo email adicionado')
    return newEmail
  }

  //multMa = () =>

  addContribuinte () {

    const inputContribuinte: Contribuintes = {
      nome: this.nome.toUpperCase(),
      cpf: this.cpf,
      email: this.email,
      celular: this.celular,
      telefone: this.telefone,
      enderecos: [{/*
        rua: this.rua,
        numero: this.numero,
        bairro: this.bairro,
        cidade: this.cidade,
        cep: this.cep,
        estado: this.estado,
        pais: this.pais
        */
      }]

    }
    if(this.nome.length > 0){
      this.service.create(inputContribuinte)
      .subscribe(resultado => {
        console.log(resultado)
      },
      errors => console.error(errors))

      this.submitted = true
      //this.aoCadastrar.emit(inputContribuinte)
      console.log('Contribuinte cadastrado!')
    }
    else {
      this.errorMessage = true
    }
  }

  editContribuinte() {
    const inputContribuinte: Contribuintes = {
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      celular: this.celular,
      telefone: this.telefone,
      enderecos: this.enderecos
    }
    this.service.edit(inputContribuinte)

  }

  deleteContribuinte() {
    const inputContribuinte: Contribuintes = {
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      celular: this.celular,
      telefone: this.telefone,
      enderecos: this.enderecos
    }
    this.service.delete(inputContribuinte)
  }

}
