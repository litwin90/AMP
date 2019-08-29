import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { KeyCodes } from '../../data/constants';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements AfterViewInit {
    isInputFocused: boolean;
    constructor(private renderer: Renderer2) {}
    @ViewChild('inputField') input: ElementRef;

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
        this.isInputFocused = true;
    }

    private markInputUsBlurred() {
        this.isInputFocused = false;
    }
}
