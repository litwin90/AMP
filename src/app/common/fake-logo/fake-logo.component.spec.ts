import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeLogoComponent } from './fake-logo.component';
import { DebugElement } from '@angular/core';

describe('FakeLogoComponent', () => {
    let component: FakeLogoComponent;
    let fixture: ComponentFixture<FakeLogoComponent>;
    let logoDe: DebugElement;
    let logoEl: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FakeLogoComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FakeLogoComponent);
        component = fixture.componentInstance;
        logoDe = fixture.debugElement;
        logoEl = logoDe.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display title "Video course"', () => {
        expect(logoEl.textContent).toContain('Video course');
    });
});
