import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseItemComponent } from '../course-item/course-item.component';
import { LoadMoreComponent } from '../load-more/load-more.component';
import { AppCommonModule } from '../../common/common.module';

describe('CoursesListComponent', () => {
    let component: CoursesListComponent;
    let fixture: ComponentFixture<CoursesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FontAwesomeModule, AppCommonModule],
            declarations: [CoursesListComponent, CourseItemComponent, LoadMoreComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
