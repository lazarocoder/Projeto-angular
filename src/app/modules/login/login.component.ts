import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,public router: Router) { }

  ngOnInit(): void {
  }

  logar(){
    this.loginService.login().subscribe(result=>{
      if(result){
        sessionStorage.setItem("basic",btoa('admin:admin'));
        this.router.navigate(['']);
      }
    })
  }

}
