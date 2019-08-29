import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from '../../icons/icons.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click } from '../../testing/utils';

describe('AuthComponent', () => {
    let component: AuthComponent;
    let fixture: ComponentFixture<AuthComponent>;
    let authDe: DebugElement;
    let authEl: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FontAwesomeModule, IconsModule],
            declarations: [AuthComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthComponent);
        component = fixture.componentInstance;
        component.userLogin = 'User Login';
        fixture.detectChanges();

        authDe = fixture.debugElement;
        authEl = authDe.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain login button if not logged in', () => {
        component.isLoggedIn = false;
        fixture.detectChanges();
        expect(authEl.textContent).toContain('Log in');
    });

    it('should contain log off button if logged in', () => {
        component.isLoggedIn = true;
        fixture.detectChanges();
        expect(authEl.textContent).toContain('Log off');
    });

    it('should contain user login if logged in', () => {
        component.isLoggedIn = true;
        fixture.detectChanges();
        const userLoginDe = authDe.query(By.css('.user-login'));
        expect(userLoginDe).toBeTruthy();
        expect(authEl.textContent).toContain(component.userLogin);
    });

    it('should not contain user login if not logged in', () => {
        component.isLoggedIn = false;
        fixture.detectChanges();
        const userLoginDe = authDe.query(By.css('.user-login'));
        expect(userLoginDe).toBeFalsy();
    });

    it('should contain log off icon if logged in', () => {
        component.isLoggedIn = true;
        fixture.detectChanges();
        const iconDe = authDe.query(By.css('.sign-out'));
        expect(iconDe).toBeTruthy();
    });

    it('should not contain log off icon if not logged in', () => {
        component.isLoggedIn = false;
        fixture.detectChanges();
        const iconDe = authDe.query(By.css('.sign-out'));
        expect(iconDe).toBeFalsy();
    });

    it('should not contain log in icon if not logged in', () => {
        component.isLoggedIn = true;
        fixture.detectChanges();
        const iconDe = authDe.query(By.css('.sign-in'));
        expect(iconDe).toBeFalsy();
    });

    it('should contain log off icon if logged in', () => {
        component.isLoggedIn = false;
        fixture.detectChanges();
        const iconDe = authDe.query(By.css('.sign-in'));
        expect(iconDe).toBeTruthy();
    });

    it('should rise login event on click if not logged in', () => {
        spyOn(component.login, 'emit');
        component.isLoggedIn = false;
        fixture.detectChanges();
        const authButtonDe = authDe.query(By.css('.login-logoff'));
        click(authButtonDe);
        expect(component.login.emit).toHaveBeenCalled();
    });

    it('should rise logout event on click if logged in', () => {
        spyOn(component.logout, 'emit');
        component.isLoggedIn = true;
        fixture.detectChanges();
        const authButtonDe = authDe.query(By.css('.login-logoff'));
        click(authButtonDe);
        expect(component.logout.emit).toHaveBeenCalled();
    });
});
