import {ValidatorFn} from "@angular/forms"

export class FormInput {
    
    label: string;
    type: string;
    key: string;
    value: string;
    validators: ValidatorFn[];

    constructor(label: string, type: string, key: string, value: string, validators: ValidatorFn[]) 
    {
        this.label = label;
        this.type = type;
        this.key = key;
        this.value = value;
        this.validators = validators;
    }
}
