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
        const isEscapePressed = keyboardEvent.code === KeyCodes.Escape;
        if (!isEscapePressed) {
            return;
        }

        this.input.nativeElement.blur();
    }
    ngOnInit() {}

    ngAfterViewInit() {
        this.renderer.setProperty(this.input.nativeElement, 'value', 'Text to search');
    }

    onBlur() {
        this.renderer.setProperty(this.input.nativeElement, 'value', 'Text to search');
        this.renderer.removeClass(this.input.nativeElement, 'focused');
        this.renderer.removeClass(this.icon.nativeElement, 'focused');
    }

    onFocus() {
        this.renderer.setProperty(this.input.nativeElement, 'value', '');
        this.renderer.addClass(this.input.nativeElement, 'focused');
        this.renderer.addClass(this.icon.nativeElement, 'focused');
    }
}
