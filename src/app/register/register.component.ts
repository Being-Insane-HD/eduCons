import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private http :HttpClient,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name :[' '],
      email:[''],
      password:['']
    })
  }
  signup(){
       this.http.post<any>("http://localhost:3000/sign", this.signupForm.value)
       .subscribe(res=>{
         alert("done");
         this.signupForm.reset();
         this.router.navigate(['login']);
       })
  }
}
