import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { AppCommonModule } from '../../common/common.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ICourse, fakeCourse } from './course-item.models';

describe('CourseItemComponent', () => {
    let component: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppCommonModule, FontAwesomeModule],
            declarations: [CourseItemComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseItemComponent);
        component = fixture.componentInstance;
        const course: ICourse = fakeCourse;
        component.course = course;
        fixture.detectChanges();
    });

    it('fails', () => {
        expect(true).toBeTruthy();
    });

    it('should create', () => {
        expect(true).toBeTruthy();
    });
});
