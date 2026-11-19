import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-databinding',
  styleUrl: './databinding.css',
  templateUrl: './databinding.html',
})
export class Databinding {
  name:string=""
  email:string=""
  password:string=""
  submitted:boolean=false
  submit(){
  this.submitted=true
  }
  form(){
    this.submitted=false
  }
}
