import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Contribuintes } from '../models/cadastrados';
import { delay, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContribuintesService {

  private readonly API = 'http://localhost:3000/contribuintes'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Contribuintes[]>(this.API)
    .pipe(
      tap(console.log)
    )
  }

  loadByID(id: any){
    return this.http.get(`${this.API}/${id}`).pipe(take(1))
  }

  create(dadosContribuinte: any) {
    return this.http.post(this.API, dadosContribuinte).pipe(take(1))
  }

  edit(dadosContribuinte: any) {
    return this.http.get<number>(this.API+"/"+dadosContribuinte.id);
  }
  delete(contribuinte: any) {
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.delete<number>(this.API+"/"+contribuinte.id);
    //return this.http.delete(this.API, dadosContribuinte)
  }
}
