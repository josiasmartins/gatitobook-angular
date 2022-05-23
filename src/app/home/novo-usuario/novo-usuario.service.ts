import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    // post(): primeiro parametro: url
    return this.httpClient.post("http://localhost:3000/user/signup", novoUsuario);
  }
}
