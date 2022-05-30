import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      // Operadores do rxjs: permite controlar os Observable
      return control.valueChanges.pipe(
        // switchMap: faz a troca, fluxo da digitação pela requisição
        // recebe uma função
        switchMap((nomeUsuario) => this.novoUsuarioService.verificaNovoUsuarioExistente(nomeUsuario)),
        // map: faz o troca do resultado
        map((usuarioExiste) => (usuarioExiste ? {usuarioExistente: true} : null)),
        // first: quando o usuario parar de digitar, ele fecha o Observable
        first()
      )
    }
  }
}
