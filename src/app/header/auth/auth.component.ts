import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    @Input() isLoggedIn: boolean;
    @Input() userLogin: string;

    @Output() login = new EventEmitter();
    @Output() logout = new EventEmitter();

    onAuthClick() {
        if (this.isLoggedIn) {
            this.logout.emit();
        } else {
            this.login.emit();
        }
    }
}
