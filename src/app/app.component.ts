import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilitiesService} from './shared/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  utilitiesService: UtilitiesService;

  constructor(private _utilitiesService: UtilitiesService){
    this.utilitiesService = _utilitiesService;
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username' : new FormControl(null, [Validators.required, Validators.maxLength(50)]),
        'email' : new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(100)])
      }),
      'gender' : new FormControl('male', Validators.required)
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

}
