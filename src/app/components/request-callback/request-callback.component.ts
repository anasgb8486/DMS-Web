import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-request-callback', 
  templateUrl: './request-callback.component.html',
  styleUrls: ['./request-callback.component.css']
})
export class RequestCallbackComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, 
    private _enquiryService: EnquiryService,
            private SpinnerService: NgxSpinnerService) { }

  requestCallbackForm: FormGroup;

  // This object will hold the messages to be displayed to the user
  // Notice, each key in this object has the same name as the
  // corresponding form control
  formErrors = {
    name: '',
    mobileNumber: '',
    email: '',
    city: '',
    requestType: '',
  };

  // This object contains all the validation messages for this form
  validationMessages = {
    name: {
      required: 'Name is required.',
      minlength: 'Name should have at least 2 characters.'
    },
    mobileNumber: {
      required: 'Mobile number is required.',
      minlength: 'Mobile number should have at least 10 characters.'
    },
    email: {
      required: 'email is required.'
    },
    city: {
      required: 'City is required.',
    },
    requestType: {
      required: 'Request type is required.',
    },
  };

  ngOnInit(): void {
    this.requestCallbackForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', Validators.required],
      city: ['', Validators.required],
      requestType: ['', Validators.required],
    });

    this.requestCallbackForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.requestCallbackForm);
    });
  }

  saveRequestCallback(): void{
    this.SpinnerService.show();
    alert('request callback submitted');
    // this.mapFormValuesToEmployeeModel();
    // const employeeToCreate = Object.assign({}, this.employee);
    // this._employeeService.createEmployee(employeeToCreate).subscribe((result: any) => {
    //    this.handleSuccss(employeeToCreate, result);
    // }, (error: any) => {
    //   this.handleError(error);
    // });
  }

  logValidationErrors(group: FormGroup = this.requestCallbackForm): void {
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

}
