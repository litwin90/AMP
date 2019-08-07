import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
    @Input() isLoggedIn: boolean;
    @Input() userLogin: boolean;

    @Output() login = new EventEmitter();
    @Output() logout = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    onAuthClick() {
        if (this.isLoggedIn) {
            this.logout.emit();
        } else {
            this.login.emit();
        }
    }
}
