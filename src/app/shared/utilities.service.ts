import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  generateArray(obj: any){
    return Object.keys(obj).map((key)=>{ return {key:key, value:obj[key]}});
  }

  describeError(error: string){
    if(error == 'required'){
        return 'This field is required';
    } else if(error == 'maxLength'){
      return 'Max length exceeded';
    } else if(error == 'email'){
      return 'Not a valid email address';
    }
    return 'Field is invalid';
  }

}
