import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /**
   * service
   *  implementa a regra do neocio
   */
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  // Observable: parecido com a promise do javascript
  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    },
    {observe: 'response' }).pipe(
      // tap: somente fazendo a operação
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    )
  }

}
