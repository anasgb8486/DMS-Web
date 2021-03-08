import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EnquiryService } from 'src/app/services/enquiry.service';
import { Enquiry } from 'src/app/models/enquiry.model';

@Component({
  selector: 'app-post-requirement',
  templateUrl: './post-requirement.component.html',
  styleUrls: ['./post-requirement.component.css']
})
export class PostRequirementComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
    private _enquiryService: EnquiryService,
    private _spinnerService: NgxSpinnerService,
    private _router: Router,
    private _toastr: ToastrService) { }

  postRequirmentForm: FormGroup;

  // This object will hold the messages to be displayed to the user
  // Notice, each key in this object has the same name as the
  // corresponding form control
  formErrors = {
    requestType: '',
    mobileNumber: '',
    description: '',
    isAgreed: '',
  };

  // This object contains all the validation messages for this form
  validationMessages = {
    requestType: {
      required: 'Request type is required.',
    },
    mobileNumber: {
      required: 'Mobile number is required.',
      minlength: 'Mobile number should have 10 characters.',
      maxlength: 'Mobile number should have 10 characters.',
      pattern: 'Only numbers are allowed.'
    },
    description: {
      required: 'description is required.',
      maxlength: 'Description should not exceed more than 1000 characters.'
    },
    isAgreed: {
      requiredTrue: 'Please accept the agreement before submitting your requirements.',
    },

  };

  ngOnInit(): void {
    this.postRequirmentForm = this._formBuilder.group({
      requestType: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      description: ['', [Validators.required, Validators.maxLength(2000)]],
      isAgreed: ['', Validators.requiredTrue],
    });

    this.postRequirmentForm.valueChanges.subscribe(
      (data) => {
        this.logValidationErrors(this.postRequirmentForm);
        // Called when success
      },
      (error) => {
        // Called when error
      }
    ).add(() => {
      // Called when operation is complete (both success and error)
    });
  }

  postRequirment(): void {
    this._spinnerService.show();
    var requirement = this.mapFormValuesToRquirementModel();
    this._enquiryService.saveEnquiry(requirement).subscribe((result: any) => {
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
    this._toastr.error('Oops something went wrong !!! Please try again after sometime', 'Error');
    this._spinnerService.hide();
  }

  handleSuccess(resp: any): void {
    this._spinnerService.hide();
    this.postRequirmentForm.reset();
    //alert('request callback submitted');
    this._toastr.success('Your requirements are saved successfully. We will conact you soon.', 'Success');
    this._router.navigate(['home']);
  }

  cancelRequest(): void {
    this.postRequirmentForm.reset();
    this._router.navigate(['home']);
  }

  mapFormValuesToRquirementModel(): Enquiry {
    var requirement = new Enquiry();
    requirement.isCallbackRequest = false;
    requirement.requestType = this.postRequirmentForm.value.requestType;
    requirement.mobileNumber = this.postRequirmentForm.value.mobileNumber;
    requirement.description = this.postRequirmentForm.value.description;

    return requirement;
  }

  logValidationErrors(group: FormGroup = this.postRequirmentForm): void {
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