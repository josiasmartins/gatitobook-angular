import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = 'ibag';
  senha = '';

  constructor(private authService: AutenticacaoService) { }

  ngOnInit(): void {}

  login() {
    // suscribe: parecido com a then da promise
    // recebe dois parametros
   this.authService.autenticar(this.usuario, this.usuario).subscribe(() => {
     console.log('Autenticado com sucesso')
   }, error => {
     alert("Usuário ou senha inválido");
     console.log(error)
   })
  }

}
