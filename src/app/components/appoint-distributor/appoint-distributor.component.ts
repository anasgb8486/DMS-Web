import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CustomValidators } from 'src/app/shared/custom.validators';

@Component({
  selector: 'app-appoint-distributor',
  templateUrl: './appoint-distributor.component.html',
  styleUrls: ['./appoint-distributor.component.css']
})
export class AppointDistributorComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
    private _spinnerService: NgxSpinnerService,
    private _toastr: ToastrService) { }

  appointDistributorForm: FormGroup;
  categoriesSettings = {};
  categories = [];

  // This object will hold the messages to be displayed to the user
  // Notice, each key in this object has the same name as the
  // corresponding form control
  formErrors = {
    brandName: '',
    businessNature: '',
    investmentRequired: '',
    establishmentYear: '',
    spaceRequired: '',
    categories: '',
    totalDistributors: '',
    annualSales: '',
    productsKeywords: '',
    distributorshipType: '',
  };

  // This object contains all the validation messages for this form
  validationMessages = {
    brandName: {
      required: 'brand name is required.',
      startingWithEmptySpace: 'You cannot start with empty spaces.',
    },
    businessNature: {
      required: 'business nature is required.',
    },
    investmentRequired: {
      required: 'investment amount is required.',
      pattern: 'Only numbers are allowed.'
    },
    establishmentYear: {
      required: 'Establishment year is required.',
      minlength: 'Establishment year should have 4 digits.',
      maxlength: 'Establishment year should have 4 digits.',
    },
    spaceRequired: {
      required: 'Space is required.',
      startingWithEmptySpace: 'You cannot start with empty spaces.',
    },
    categories: {
      required: 'categories are required.',
    },
    totalDistributors: {
      requiredTrue: 'Please enter total number of distributors.',
      pattern: 'Only numbers are allowed.'
    },
    annualSales: {
      requiredTrue: 'Please provide annual sales figures.',
      pattern: 'Only numbers are allowed.'
    },
    productsKeywords: {
      requiredTrue: 'Products keywords are required',
      startingWithEmptySpace: 'You cannot start with empty spaces.',
    },
    distributorshipType: {
      requiredTrue: 'distributorship type is required.',
    },

  };

  ngOnInit(): void {
    this.categories = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.categoriesSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 6,
      allowSearchFilter: true
    };

    this.appointDistributorForm = this._formBuilder.group({
      brandName: ['', [Validators.required,
      CustomValidators.startingWithEmptySpace()]],
      businessNature: ['', Validators.requiredTrue],
      mobileNumber: ['', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      investmentRequired: ['', [Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      establishmentYear: ['', [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),]],
      spaceRequired: ['', [Validators.required,
      CustomValidators.startingWithEmptySpace()]],
      categories: ['', [Validators.required]],
      totalDistributors: ['', [Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      annualSales: ['', [Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      productsKeywords: ['', [Validators.required,
      CustomValidators.startingWithEmptySpace()]],
      distributorshipType: ['', [Validators.required]],
      description: [''],
    });

    this.appointDistributorForm.valueChanges.subscribe(
      (data) => {
        this.logValidationErrors(this.appointDistributorForm);
        // Called when success
      },
      (error) => {
        // Called when error
      }
    ).add(() => {
      // Called when operation is complete (both success and error)
    });
  }

  appointDistributorSubmit(): void {
    this._spinnerService.show();
    // let requirement = this.mapFormValuesToRquirementModel();
    // this._enquiryService.saveEnquiry(requirement).subscribe((result: any) => {
    //   this.handleSuccess(result);
    // }, (error: any) => {
    //   this.handleError(error);
    // });
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
    this.appointDistributorForm.reset();
    // alert('request callback submitted');
    this._toastr.success('Your data has been saved successfully.', 'Success');
    //this._router.navigate(['home']);
  }

  logValidationErrors(group: FormGroup = this.appointDistributorForm): void {
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
