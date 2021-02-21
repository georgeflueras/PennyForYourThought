import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

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
    public checkbox: boolean = false;

    constructor(public dialog: MatDialog) {
        this.emailFormControl = new FormControl('', [ 
            Validators.required,
            Validators.email,
        ]);
    }
    
      
    }

