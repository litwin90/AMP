import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseItemComponent } from '../course-item/course-item.component';
import { LoadMoreComponent } from '../load-more/load-more.component';
import { AppCommonModule } from '../../common/common.module';
import { IconsModule } from '../../icons/icons.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { getDefaultCourseList } from '../course-item/course-item.models';

describe('CoursesListComponent', () => {
    describe('Class testing', () => {
        let component: CoursesListComponent;
        let fixture: ComponentFixture<CoursesListComponent>;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [FontAwesomeModule, AppCommonModule, IconsModule],
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

        it('should set initial list size on init', () => {
            component.ngOnInit();
            expect(component.listSize).toBeDefined();
        });

        it('should set courses on init', () => {
            component.ngOnInit();
            expect(component.courses).toBeDefined();
        });

        it('#setListSize should set set passed list size', () => {
            component.setListSize(10);
            expect(component.listSize).toBe(10);
        });

        it('#onLoadRequest should increase list size by loadRequestSize', () => {
            const newSize = component.initialListSize + component.loadRequestSize;
            component.ngOnInit();
            component.onLoadRequest();
            expect(component.listSize).toBe(newSize);
        });

        it('#onEditCourse should call console log', () => {
            spyOn(console, 'log');
            component.onEditCourse('id');
            expect(console.log).toHaveBeenCalled();
        });

        it('#onDeleteCourse should call console log', () => {
            spyOn(console, 'log');
            component.onDeleteCourse('id');
            expect(console.log).toHaveBeenCalled();
        });
    });

    describe('Component testing', () => {
        let component: CoursesListComponent;
        let fixture: ComponentFixture<CoursesListComponent>;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [FontAwesomeModule, AppCommonModule, IconsModule],
                declarations: [CoursesListComponent, CourseItemComponent, LoadMoreComponent],
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CoursesListComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should contain "create course" button', () => {
            const courseListDe: DebugElement = fixture.debugElement;
            const buttonCreateCourseDe = courseListDe.query(By.css('.add-course'));
            const buttonEl: HTMLElement = buttonCreateCourseDe.nativeElement;
            expect(buttonEl.textContent).toContain('Add course');
        });

        it('should contain "Load More" button', () => {
            component.courses = getDefaultCourseList(10);
            component.listSize = 2;
            fixture.detectChanges();
            const courseListDe: DebugElement = fixture.debugElement;
            const buttonLoadMoreDe: DebugElement = courseListDe.query(By.css('.load-more'));
            const buttonLoadMoreEl: HTMLElement = buttonLoadMoreDe.nativeElement;

            expect(buttonLoadMoreEl.textContent).toContain('Load More');
        });

        it('should not contain "Load More" button if current list size is max', () => {
            component.courses = getDefaultCourseList(0);
            component.listSize = 0;
            fixture.detectChanges();
            const courseListDe: DebugElement = fixture.debugElement;
            const buttonLoadMoreDe: DebugElement = courseListDe.query(By.css('.load-more'));

            expect(buttonLoadMoreDe).toBeNull();
        });

        it('should load list items on load request', () => {
            const initialListsCount = component.listSize;
            component.onLoadRequest();
            const updatedListSize = component.listSize;
            expect(updatedListSize).toBeGreaterThan(initialListsCount);
        });

        it('should load list items on load request', () => {
            component.courses = getDefaultCourseList(10);
            component.listSize = 2;
            fixture.detectChanges();
            const courseListDe: DebugElement = fixture.debugElement;
            let courseItemDe: DebugElement[] = courseListDe.queryAll(By.css('.course-item'));
            const initialListsCount = courseItemDe.length;
            component.onLoadRequest();
            fixture.detectChanges();
            courseItemDe = courseListDe.queryAll(By.css('.course-item'));
            const updatedListSize = courseItemDe.length;
            expect(updatedListSize).toBeGreaterThan(initialListsCount);
        });
    });
});
