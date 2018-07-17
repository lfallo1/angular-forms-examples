import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  generateArray(obj: any){
    return obj ? Object.keys(obj).map((key)=>{ return {key:key, value:obj[key]}}) : [];
  }

  describeError(error: string){
    if(error == 'required'){
        return 'This field is required';
    } else if(error == 'maxLength'){
      return 'Max length exceeded';
    } else if(error == 'email'){
      return 'Not a valid email address';
    } else if(error ='nameForbidden'){
      return 'This name is not allowed';
    } else if(error ='emailForbidden'){
      return 'This email is not allowed';
    }
    return 'Field is invalid';
  }

}
