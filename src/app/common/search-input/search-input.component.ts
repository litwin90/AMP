import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { KeyCodes } from '../../data/constants';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, AfterViewInit {
    constructor(private renderer: Renderer2) {}
    @ViewChild('inputField') input: ElementRef;
    @ViewChild('icon') icon: ElementRef;

    @HostListener('keydown', ['$event'])
    onKeyDown(keyboardEvent: KeyboardEvent) {
        switch (keyboardEvent.code) {
            case KeyCodes.Escape:
                this.clearInput();
                break;
            case KeyCodes.Enter:
                this.onSubmit();
                break;
            default:
                break;
        }
    }
    ngOnInit() {}

    ngAfterViewInit() {
        this.renderer.setProperty(this.input.nativeElement, 'value', 'Text to search');
    }

    onBlur() {
        this.setInputValue('Text to search');
        this.markInputUsBlurred();
    }

    onFocus() {
        this.clearInput();
        this.markInputAsFocused();
    }

    onSubmit() {
        this.input.nativeElement.blur();
    }

    private clearInput() {
        this.setInputValue('');
    }

    private setInputValue(value: string) {
        this.renderer.setProperty(this.input.nativeElement, 'value', value);
    }

    private markInputAsFocused() {
        this.renderer.addClass(this.input.nativeElement, 'focused');
        this.renderer.addClass(this.icon.nativeElement, 'focused');
    }

    private markInputUsBlurred() {
        this.renderer.removeClass(this.input.nativeElement, 'focused');
        this.renderer.removeClass(this.icon.nativeElement, 'focused');
    }
}
