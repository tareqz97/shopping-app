import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { AuthService } from './auth.service';
import { AppGlobalsService } from '../shared/app-globals.service';
import {AuthResponseData} from "./auth.service";
import {Observable} from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService, private _global: AppGlobalsService, private router: Router) { }
  isLoding : boolean = false;
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.isLoding = true;
    const email = form.value.email;
    const password = form.value.password;
    this.auth.login(email,password).subscribe(
      res => {
        console.log('HTTP response', res);
        this.isLoding = false;
        this.router.navigate(['/admin'])
      },
      error => {
        console.log('HTTP Error :', this.auth.handleError(error));
        this.isLoding = false;
      },
      () => {
        console.log('HTTP request completed.');
      } 
    );
  }

}
