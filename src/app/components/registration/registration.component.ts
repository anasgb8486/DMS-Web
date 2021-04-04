import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomValidators } from 'src/app/shared/custom.validators';
import { RegistrationDto } from 'src/app/models/registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationDto: RegistrationDto;

  constructor(private _formBuilder: FormBuilder,
    private _spinnerService: NgxSpinnerService,
    private _router: Router,
    private _toastr: ToastrService) { }

  registrationForm: FormGroup;
  // This object will hold the messages to be displayed to the user
  // Notice, each key in this object has the same name as the
  // corresponding form control
  formErrors = {
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    passwordGroup: ''
  };

  // This object contains all the validation messages for this form
  validationMessages = {
    mobileNumber: {
      required: 'Mobile number is required.',
      minlength: 'Mobile number should have 10 characters.',
      maxlength: 'Mobile number should have 10 characters.',
      pattern: 'Only numbers are allowed.'
    },
    email: {
      required: 'Email is required.',
      startingWithEmptySpace: 'You cannot start description with empty spaces.',
      pattern: 'Please provide valid email address.'
    },
    password: {
      required: 'Password is required.',
      startingWithEmptySpace: 'You cannot start password text with empty spaces.',
      minlength: 'Password should have at least 4 characters.',
      maxlength: 'Password should not exceed more than 8 characters.'
    },
    confirmPassword: {
      required: 'Confirm password is required.',
    },
    passwordGroup: {
      passwordMismatch: 'Password and Confirm password do not match.'
    },

  };

  ngOnInit(): void {
    this.registrationForm = this._formBuilder.group({
      mobileNumber: ['', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      email: ['', [Validators.required,
      CustomValidators.startingWithEmptySpace(),
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    });

    this.registrationForm.valueChanges.subscribe(
      (data) => {
        this.logValidationErrors(this.registrationForm);
        // Called when success
      },
      (error) => {
        // Called when error
      }
    ).add(() => {
      // Called when operation is complete (both success and error)
    });
  }

  logValidationErrors(group: FormGroup = this.registrationForm): void {
    // Loop through each control key in the FormGroup
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }

  matchPasswords(group: AbstractControl): { [key: string]: any } | null {
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');

    if (passwordControl.value === confirmPasswordControl.value || confirmPasswordControl.pristine) {
      return null;
    } else {
      return { 'passwordMismatch': true };
    }
  }

  getMoreDetails() {
    this.registrationDto = new RegistrationDto();
  }

}
