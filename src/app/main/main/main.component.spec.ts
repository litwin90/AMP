import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { BreadCrumbsComponent } from '../bread-crumbs/bread-crumbs.component';
import { CourseControlsComponent } from '../course-controls/course-controls.component';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { AppCommonModule } from '../../common/common.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseItemComponent } from '../course-item/course-item.component';
import { LoadMoreComponent } from '../load-more/load-more.component';
import { IconsModule } from '../../icons/icons.module';

describe('MainComponent', () => {
    let component: MainComponent;
    let fixture: ComponentFixture<MainComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppCommonModule, FontAwesomeModule, IconsModule],
            declarations: [
                MainComponent,
                BreadCrumbsComponent,
                CourseControlsComponent,
                CoursesListComponent,
                CourseItemComponent,
                LoadMoreComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
