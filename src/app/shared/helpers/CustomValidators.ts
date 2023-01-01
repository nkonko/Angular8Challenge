import { FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import * as moment from "moment";

export const minimumAge: ValidatorFn = (control: FormGroup) : ValidationErrors | null => {
  const minAge = 18;
  const date = control.get('date');
  const today = moment();
  const age = today.diff(moment(date.value), "years");

  return age >= minAge ? null : { notMinAge: true };
};

export const mustMatch: ValidatorFn = (control: FormGroup) : ValidationErrors | null => {
  const password = control.get('password');
  const repeatPassword = control.get('repeatPassword');

  return password.value === repeatPassword.value ? null : { notEqual: true };
};
