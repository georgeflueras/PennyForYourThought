import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    public checked: boolean = false;
    public indeterminate: boolean = false;
    public labelPosition: 'before' | 'after' = 'after';
    public disabled: boolean = false;
    public emailFormControl: FormControl;

    constructor() {
        this.emailFormControl = new FormControl('', [ // email validators
            Validators.required,
            Validators.email,
        ]);
    }
}