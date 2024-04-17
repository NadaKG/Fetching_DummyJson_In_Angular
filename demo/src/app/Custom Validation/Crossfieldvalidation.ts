import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function PasswordMatched(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let password = control.get('password');
    let confirmpassword = control.get('confirmpassword');
    if (
      !password ||
      !confirmpassword ||
      !password.value ||
      !confirmpassword.value
    ) {
      return null;
    }
    let validationerr = {
      'Password Unmatched': {
        pass: password.value,
        confirm: confirmpassword.value,
      },
    };
    return password.value === confirmpassword.value ? null : validationerr;
  };
}
