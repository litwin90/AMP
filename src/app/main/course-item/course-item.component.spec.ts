import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { AppCommonModule } from '../../common/common.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from '../../icons/icons.module';
import { getDefaultCourseList, ICourse } from './course-item.models';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';
import { click } from '../../testing/utils';

describe('CourseItemComponent', () => {
    describe('default tests', () => {
        let component: CourseItemComponent;
        let fixture: ComponentFixture<CourseItemComponent>;
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AppCommonModule, FontAwesomeModule, IconsModule],
                declarations: [CourseItemComponent],
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CourseItemComponent);
            component = fixture.componentInstance;
            component.course = getDefaultCourseList(1)[0];
            fixture.detectChanges();
        });

        it('should create', () => {
            expect(true).toBeTruthy();
        });
    });

    describe('stand-alone approach', () => {
        let component: CourseItemComponent;
        let fixture: ComponentFixture<CourseItemComponent>;
        let itemDe: DebugElement;
        const defaultItem: ICourse = getDefaultCourseList(1)[0];
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AppCommonModule, FontAwesomeModule, IconsModule],
                declarations: [CourseItemComponent],
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CourseItemComponent);
            component = fixture.componentInstance;
            itemDe = fixture.debugElement;
            component.course = defaultItem;

            fixture.detectChanges();
        });

        it('should display course title', () => {
            const courseTitleDe = itemDe.query(By.css('.title'));
            const courseTitleEl: HTMLElement = courseTitleDe.nativeElement;
            expect(courseTitleEl.textContent).toContain(defaultItem.title);
        });

        it('should display course description', () => {
            const courseDescriptionDe = itemDe.query(By.css('.description'));
            const courseDescriptionEl: HTMLElement = courseDescriptionDe.nativeElement;
            expect(courseDescriptionEl.textContent).toContain(defaultItem.description);
        });

        it('should contain date info', () => {
            const courseDateInfoDe = itemDe.query(By.css('.date-info'));
            const courseDateInfoEl: HTMLElement = courseDateInfoDe.nativeElement;
            expect(courseDateInfoEl.textContent).toContain('8 Aug, 2019');
            expect(courseDateInfoEl.textContent).toContain('2h');
        });

        it('should contain "Edit" button', () => {
            const editButtonDe = itemDe.query(By.css('.edit'));
            const editButtonEl: HTMLElement = editButtonDe.nativeElement;
            expect(editButtonEl.textContent).toContain('Edit');
        });

        it('should contain "Delete" button', () => {
            const deleteButtonDe = itemDe.query(By.css('.delete'));
            const deleteButtonEl: HTMLElement = deleteButtonDe.nativeElement;
            expect(deleteButtonEl.textContent).toContain('Delete');
        });

        it('should raise event on "editCourse"', () => {
            let courseId: string;

            component.editCourse.subscribe((id: string) => {
                courseId = id;
            });

            const editButtonDe = itemDe.query(By.css('.edit'));
            editButtonDe.triggerEventHandler('click', null);
            expect(courseId).toBe(defaultItem.id);
        });

        it('should raise event on "DeleteCourse"', () => {
            let courseId: string;

            component.deleteCourse.subscribe((id: string) => {
                courseId = id;
            });

            const deleteButtonDe = itemDe.query(By.css('.delete'));
            deleteButtonDe.triggerEventHandler('click', null);
            expect(courseId).toBe(defaultItem.id);
        });
    });

    describe('class testing approach', () => {
        let component: CourseItemComponent;
        it('should raise event on "Edit" clicked', () => {
            component = new CourseItemComponent();
            const course = getDefaultCourseList(1)[0];

            component.editCourse.subscribe((id: string) => {
                expect(id).toBe(course.id);
            });

            component.onEdit(course.id);
        });

        it('should raise event on "Delete" clicked', () => {
            component = new CourseItemComponent();
            const course = getDefaultCourseList(1)[0];

            component.deleteCourse.subscribe((id: string) => {
                expect(id).toBe(course.id);
            });

            component.onDelete(course.id);
        });
    });

    describe('test-host approach', () => {
        @Component({
            template: `
                <app-course [course]="course" (editCourse)="onEdit($event)" (deleteCourse)="onDelete($event)">
                </app-course>
            `,
        })
        class TestHostComponent {
            course = getDefaultCourseList(1)[0];
            editedId: string;
            deletedId: string;

            onEdit(id: string) {
                this.editedId = id;
            }

            onDelete(id: string) {
                this.deletedId = id;
            }
        }

        let fixture: ComponentFixture<TestHostComponent>;
        let testHost: TestHostComponent;
        let hostDe: DebugElement;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AppCommonModule, FontAwesomeModule, IconsModule],
                declarations: [CourseItemComponent, TestHostComponent],
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TestHostComponent);
            testHost = fixture.componentInstance;
            hostDe = fixture.debugElement;
            fixture.detectChanges();
        });

        it('should raise event on "editCourse"', () => {
            const editButtonDe = hostDe.query(By.css('.edit'));
            click(editButtonDe);
            expect(testHost.course.id).toBe(testHost.editedId);
        });

        it('should raise event on "DeleteCourse"', () => {
            const deleteButtonDe = hostDe.query(By.css('.delete'));
            click(deleteButtonDe);
            expect(testHost.course.id).toBe(testHost.deletedId);
        });
    });
});
