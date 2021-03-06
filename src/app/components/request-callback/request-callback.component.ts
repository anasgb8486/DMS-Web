import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { from } from 'rxjs';
import { EnquiryService } from 'src/app/services/enquiry.service';
import {RequestCallback} from 'src/app/models/request-callback.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-request-callback',
  templateUrl: './request-callback.component.html',
  styleUrls: ['./request-callback.component.css']
})
export class RequestCallbackComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, 
    private _enquiryService: EnquiryService,
            private _spinnerService: NgxSpinnerService,
            private _router: Router,
            private _toastr: ToastrService) { }

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
      minlength: 'Mobile number should have 10 characters.',
      maxlength: 'Mobile number should have 10 characters.',
      pattern: 'Only numbers are allowed.'
    },
    email: {
      required: 'Email is required.',
      email: 'Please provide valid email address.'
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
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      requestType: ['', Validators.required],
    });

    this.requestCallbackForm.valueChanges.subscribe(
      (data) => {
        this.logValidationErrors(this.requestCallbackForm);
         // Called when success
       },
      (error) => {
         // Called when error
      }
    ).add(() => {
         // Called when operation is complete (both success and error)
    });
  }

  saveRequestCallback(): void {
    this._spinnerService.show();
    var request = this.mapFormValuesToRequestCallbackModel();
    this._enquiryService.saveCallbackRequest(request).subscribe((result: any) => {
      this.handleSuccess(result);
    }, (error: any) => {
      this.handleError(error);
    });
  }

  handleError(error: any): void {
    // if (error.statusText === 'Bad Request' || error.status === 400) {
    //   alert(error.error);
    //   this._spinnerService.hide();
    // }
    console.log(error);
    this._spinnerService.hide();
  }

  handleSuccess(resp: any): void{
    this._spinnerService.hide();
    this.requestCallbackForm.reset();
    //alert('request callback submitted');
    this._toastr.success('Callback request submitted successfully.', 'Result');
    //this._router.navigate(['home']);
  }

  mapFormValuesToRequestCallbackModel(): RequestCallback{
    var request = new RequestCallback();
    request.name = this.requestCallbackForm.value.name;
    request.email = this.requestCallbackForm.value.email;
    request.mobileNumber = this.requestCallbackForm.value.mobileNumber;
    request.city = this.requestCallbackForm.value.city;
    request.requestType = this.requestCallbackForm.value.requestType;

    return request;
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
