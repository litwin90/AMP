import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    isLoggedIn = false;
    userLogin = 'Denis';

    constructor() {}

    ngOnInit() {}

    onLogin() {
        this.isLoggedIn = true;
    }

    onLogout() {
        this.isLoggedIn = false;
    }
}
