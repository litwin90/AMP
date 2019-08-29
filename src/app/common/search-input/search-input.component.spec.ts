import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from '../../icons/icons.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { focus, blur } from '../../testing/utils';

describe('SearchInputComponent', () => {
    let component: SearchInputComponent;
    let fixture: ComponentFixture<SearchInputComponent>;
    let inputDe: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FontAwesomeModule, IconsModule],
            declarations: [SearchInputComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchInputComponent);
        component = fixture.componentInstance;
        inputDe = fixture.debugElement;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain search input field', () => {
        const inputFieldDe = inputDe.query(By.css('.input'));
        expect(inputFieldDe).toBeTruthy();
    });

    it('should contain initial input value', () => {
        const inputFieldDe = inputDe.query(By.css('.input'));
        const inputFieldEl: HTMLInputElement = inputFieldDe.nativeElement;

        const hasValue = !!inputFieldEl.value;
        expect(hasValue).toBeTruthy();
    });

    it('should hide initial input value on focus', () => {
        const inputFieldDe = inputDe.query(By.css('.input'));
        const inputFieldEl: HTMLInputElement = inputFieldDe.nativeElement;
        focus(inputFieldDe);
        expect(inputFieldEl.value).toBeFalsy();
    });

    it('should hide input value on blur', () => {
        const inputFieldDe = inputDe.query(By.css('.input'));
        const inputFieldEl: HTMLInputElement = inputFieldDe.nativeElement;
        const mockInputValue = 'Mock input value';
        const initialInputValue = inputFieldEl.value;

        focus(inputFieldDe);
        inputFieldEl.value = mockInputValue;
        blur(inputFieldDe);
        expect(inputFieldEl.value).toBe(initialInputValue);
    });

    it('should contain search icon', () => {
        const iconDe = inputDe.query(By.css('fa-icon'));
        expect(iconDe).toBeTruthy();
    });

    it('should hide search icon on input focus', () => {
        const inputFieldDe = inputDe.query(By.css('.input'));
        focus(inputFieldDe);
        fixture.detectChanges();
        const iconDe = inputDe.query(By.css('fa-icon'));
        expect(iconDe).toBeFalsy();
    });

    it('should display search icon on input blur', () => {
        const inputFieldDe = inputDe.query(By.css('.input'));
        focus(inputFieldDe);
        fixture.detectChanges();
        blur(inputFieldDe);
        fixture.detectChanges();
        const iconDe = inputDe.query(By.css('fa-icon'));
        expect(iconDe).toBeTruthy();
    });
});
