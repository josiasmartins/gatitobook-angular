import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = 'ibag';
  senha = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  login() {
    // suscribe: parecido com a then da promise
    // recebe dois parametros
   this.authService.autenticar(this.usuario, this.usuario).subscribe(() => {
     this.router.navigate(['animais'])
   }, error => {
     alert("Usuário ou senha inválido");
     console.log(error)
   })
  }

}
