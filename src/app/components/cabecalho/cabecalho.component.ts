import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../authentication/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  user$ = this.usuarioService.retornaUsuario();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
