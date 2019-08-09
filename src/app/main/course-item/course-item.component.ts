import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from './course-item.models';

@Component({
    selector: 'app-course',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
    @Input() course: ICourse;

    @Output() editCourse = new EventEmitter<string>();
    @Output() deleteCourse = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {}

    onEdit(id: string) {
        this.editCourse.emit(id);
    }

    onDelete(id: string) {
        this.deleteCourse.emit(id);
    }
}
