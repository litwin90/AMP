import { Component, OnInit } from '@angular/core';
import { ICourse, fakeCourse } from '../course-item/course-item.models';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
    courses: ICourse[];

    constructor() {}

    ngOnInit() {
        this.courses = [];
        this.courses.length = 5;
        this.courses.fill(fakeCourse, 0, 5);
    }

    onEditCourse(id: string) {
        console.log(`Edited course id: ${id}`);
    }

    onDeleteCourse(id: string) {
        console.log(`Deleted course id: ${id}`);
    }
}
