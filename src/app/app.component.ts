import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilitiesService} from './shared/utilities.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  utilitiesService: UtilitiesService;
  forbiddenUsernames = ['Wrong', 'Invalid'];

  constructor(private _utilitiesService: UtilitiesService){
    this.utilitiesService = _utilitiesService;
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username' : new FormControl(null, [Validators.required, Validators.maxLength(50), this.forbiddenNames.bind(this)]),
        'email' : new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(100)], this.forbiddenEmails.bind(this))
      }),
      'gender' : new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });

    //listen for status (or value - changing status to valueChanges) changes
    this.signupForm.statusChanges.subscribe(status =>{
      console.log(status);
    });
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean}{
    if(this.forbiddenUsernames.indexOf(control.value) > -1){
      return {nameForbidden: true};
    }
    return null;
  }


  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>{
    return new Promise<any>((resolve, reject) =>{
      setTimeout(()=>{
        if(control.value === 'admin@user.com'){
          resolve({emailForbidden: true});
        } else{
          resolve(null);
        }
      },1000);
    });
  }
}
