import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/models/thought';
import { LocalDbService } from 'src/app/services/local-db.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    public rememberMe: boolean = false;
    public agreeTerms: boolean = false;
    public indeterminate: boolean = false;
    public labelPosition: 'before' | 'after' = 'after';
    public disabled: boolean = false;
    public loginEmail: FormControl;
    public loginPassword: FormControl;
    public nameFormControl: FormControl;
    public emailFormControl: FormControl;
    public passwordFormControl: FormControl;
    public confirmPasswordFormControl: FormControl;
    public checkbox: boolean = false;
    public selectedTab: number = 0;
    public newUser: User = {
        name: null,
        email: null,
        password: null,
    };

    public loginUser = {
        email: null,
        password: null,
    };
    public confirmPassword: string;
    public passwordDoesNotMatch: boolean = false;

    constructor(public dialog: MatDialog, private localDbService: LocalDbService, private router: Router) {
        this.nameFormControl = new FormControl('fullName', []);
        this.emailFormControl = new FormControl('email', [ 
            Validators.required,
            Validators.email,
        ]);
        this.confirmPasswordFormControl = new FormControl('confirmPassword', []);
        this.passwordFormControl = new FormControl('password', []);
        this.loginEmail = new FormControl('loginEmail', []);
        this.loginPassword = new FormControl('loginPassword', []);
    }

    signUp() {
        if (this.newUser.password !== this.confirmPassword) {
            this.confirmPasswordFormControl.setErrors({ 'doesNotMatchPassword': true });
            return;
        }
        if (this.emailFormControl.invalid) {
            return;
        }
        this.confirmPasswordFormControl.setErrors(null);
        this.localDbService.add<User>('users', this.newUser);
        this.selectedTab = 0;
    }

    login() {
        const dbUser = this.localDbService.get<User>('users', 'email', this.loginUser.email);
        if (!dbUser) {
            this.loginEmail.setErrors({ 'wrong': true });
            this.loginPassword.setErrors({ 'wrong': true });
            return;
        }
        if (dbUser.password !== this.loginUser.password) {
            this.loginEmail.setErrors({ 'wrong': true });
            this.loginPassword.setErrors({ 'wrong': true });
            return;
        }
        this.loginEmail.setErrors(null);
        this.loginPassword.setErrors(null);
        if (this.rememberMe) {
            const days = 2;
            const date = new Date();
            date.setDate(date.getDate() + days);
            document.cookie = `user="${this.loginUser.email}; expires=${date.toUTCString()}"`;
        } else {
            sessionStorage.setItem('user', this.loginUser.email);
        }
        this.router.navigate(['/thoughts']);
    }
      
}

