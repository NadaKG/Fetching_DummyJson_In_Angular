import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordMatched } from 'src/app/Custom Validation/Crossfieldvalidation';
import { IUser } from 'src/app/Models/user/iuser';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  userRegisterForm:FormGroup;

  constructor(private formb:FormBuilder){
    this.userRegisterForm = this.formb.group({
      fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,30}')]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''], 
      address: this.formb.group({
        country: ['', [Validators.required]],
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        postalCode: ['', [Validators.required, Validators.pattern('\\d{5}')]]
      }),
      password: ['', [Validators.required]],
      confirmpassword:['' , [Validators.required]],
      referral:[''],
      referralother:[''],
    } ,{validators:[PasswordMatched()]}
  );
    
    }

    get fullName(){
      return this.userRegisterForm.get('fullName');
    }
    get email(){
      return this.userRegisterForm.get('email');
    }
    get phone(){
      return this.userRegisterForm.get('phone');
    }
    get password(){
      return this.userRegisterForm.get('password');
    }
    get confirmpassword(){
      return this.userRegisterForm.get('confirmpassword');
    }

    get referral(){
      return this.userRegisterForm.get('referral');
    }

    get referralother(){
      return this.userRegisterForm.get('referralother');
    }
    Register(){
      let userModel:IUser = this.userRegisterForm.value;
    }

    updateReferral(){
      if(this.referral?.value === 'other'){
        this.referralother?.addValidators([Validators.required])
      }
      else{
        this.referralother?.clearValidators();
      }
      this.referralother?.updateValueAndValidity();
    }

}
