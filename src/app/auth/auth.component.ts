import { HttpHeaders } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username:string | undefined;
  password:string | undefined;
  token:string| undefined;
  user:User | undefined;
  constructor(private authS:AuthService) { }

  ngOnInit(): void {
    
  }
  LogIn(){
    this.authS.postToken(this.username,this.password).subscribe();
 
    

  }
}
