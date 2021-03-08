import { AbstractControl } from '@angular/forms';

export class CustomValidators {
    static startingWithEmptySpace() {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const ctrlValue: string = control.value;
            if (ctrlValue.startsWith(' ')) {
                return { 'startingWithEmptySpace': true };
            } else {
                return null;
            }
        };
    }
}