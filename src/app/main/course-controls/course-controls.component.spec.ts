import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseControlsComponent } from './course-controls.component';

describe('CourceControlsComponent', () => {
    let component: CourseControlsComponent;
    let fixture: ComponentFixture<CourseControlsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CourseControlsComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseControlsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
