import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  about: string = '';
  genders: String[] = ['Male', 'Female'];
  @ViewChild('form') signupForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';

    //use setValue to set the entire form

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log('form is valid');
    }
  }
}
