import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseControlsComponent } from './course-controls.component';
import { AppCommonModule } from '../../common/common.module';

describe('CourceControlsComponent', () => {
    let component: CourseControlsComponent;
    let fixture: ComponentFixture<CourseControlsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppCommonModule],
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
